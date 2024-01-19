import NextAuth from "next-auth"

import Apple from "next-auth/providers/apple"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

export const config = {
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    providers: [
        Apple,
        Facebook,
        Google,
    ],
    callbacks: {
    },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
