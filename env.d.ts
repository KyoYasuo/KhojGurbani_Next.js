// env.d.ts

declare namespace NodeJS {
    interface processEnv {
        AUTH_GOOGLE_ID: string;
        AUTH_GOOGLE_SECRET: string;
        AUTH_FACEBOOK_ID: string;
        AUTH_FACEBOOK_SECRET: string;
    }
}