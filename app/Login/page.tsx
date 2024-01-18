"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from "react";
import { postAuth } from "@/lib/fetch_data";

export default function LoginPage() {

    const [email, setEmail] = useState("");

    const sendAuth = (): void => {
        let param = {
            email: email,
        }
        postAuth(param); // Assuming postTrack is a function you've defined elsewhere
    };

    return (
        <div className="w-[500px] h-[480px] bg-white rounded-lg shadow-double px-[55px] py-[30px] flex flex-col items-center my-[50px]">
            <h2 className="text-[20px] text-[#212529] font-bold mb-[30px]">Sign In</h2>
            <div className="w-full flex flex-col gap-[15px] justify-between items-center">
                <button
                    className="cursor-pointer w-full flex gap-2 justify-center items-center h-[44px] rounded-md border-2 border-[#518EF8]"
                    onClick={() => signIn('google')}
                >
                    <Image src="/Images/Login/google.png" alt="google" width={23} height={23} />
                    <span className="text-[16px] text-[#518EF8]">Sign in with Google</span>
                </button>
                <button
                    className="cursor-pointer w-full flex gap-2 justify-center items-center h-[44px] rounded-md border-2 border-[#4E71A8]"
                    onClick={() => signIn('facebook')}
                >
                    <Image src="/Images/Login/facebook.png" alt="facebook" width={23} height={23} />
                    <span className="text-[16px] text-[#4E71A8]">Sign in with Facebook</span>
                </button>
                <button
                    className="cursor-pointer w-full flex gap-2 justify-center items-center h-[44px] rounded-md border-2 border-black"
                    onClick={() => signIn('apple')}
                >
                    <Image src="/Images/Login/apple.png" alt="apple" width={28} height={28} />
                    <span className="text-[16px] text-black">Sign in with Apple</span>
                </button>
            </div>
            <p className="text-[15px] text-[#8F8F8F] my-[13px]">OR</p>
            <div className="w-full flex flex-col justify-between items-center grow">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <p className="hidden peer-invalid:block text-[12px] text-[#FF0000] w-full text-left">Email must be a valid email address</p>
                <p className="hidden peer-empty:block text-[12px] text-[#FF0000] w-full text-left">Email is required</p>
                <button
                    className="w-full h-[44px] rounded-sm bg-blue-primary text-white"
                    onClick={() => { sendAuth(); }}
                >
                    Continue
                </button>
                <div className="flex justify-center text-blue-primary">
                    <p className="text-[15px] hover:underline cursor-pointer">Can&apos;t log in?</p>
                    <span>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
                    <Link className="text-[15px] hover:underline cursor-pointer" href={"/Login/Register"}>Sign up for an account</Link>
                </div>
            </div>
        </div>
    )
}