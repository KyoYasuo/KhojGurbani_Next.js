import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import google from 'next-auth/providers/google'; // added import
import { postData } from './utils/fetch_server';

declare module "next-auth" {
    interface Session {
        data: any; // Define the 'data' property
        token: any; // Define the 'token' property
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.data = token.data;
                session.token = token.token;
            }
            return session;
        },
        async jwt({ token, account }) {

            const param = {
                email: token.email,
                name: token.name,
                photo_url: token.picture,
                provider: account?.provider,
                social_account_id: account?.providerAccountId,
            }

            const { data: res } = await postData('/login-with-social', param);

            if (res.status === 'success') {
                token.data = res.user;
                token.token = res.token;
            }

            return token;
        }
    },
});