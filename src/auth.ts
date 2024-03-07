import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import google from 'next-auth/providers/google'; // added import

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            console.log(session, token, user);
            return session;
        },
        async jwt({ token, user, trigger, session }) {
            console.log(token, user, trigger, session);
            return token;
        },
    },
});