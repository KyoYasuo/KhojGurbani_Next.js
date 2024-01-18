"use client"
import React, { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { postRegister } from "@/lib/fetch_data";

export default function SignUpPage() {

    const [captchaValue, setCaptchaValue] = useState<null | string>(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    function onChange(value: any) {
        setCaptchaValue(value)
        if (value) toast.success("You passed reCAPTCHA successfully!");
    }

    function validatePassword() {
        if (password?.length < 6) toast.error("Please enter more than 6 letters as Password.");
        else if (password === confirmPassword) {
            return true;
        }
        else {
            toast.error("Password incorrect!");
        }
    }

    function validateFill() {
        if (!name) {
            toast.error("Please enter your name.");
        }
        else if (!email) {
            toast.error("Please enter your email.");
        }
        else return true;
    }

    const sendRegister = (): void => {
        let param = {
            name: name,
            email: email,
            password: password,
            confirmPassword: password,
            city: city,
            state: state,
            country: country,
            recaptch: captchaValue
        }
        postRegister(param); // Assuming postTrack is a function you've defined elsewhere
    };

    function onsubmit() {
        if (captchaValue) {
            if (validatePassword()) {
                if (validateFill()) {
                    sendRegister();
                }
            }
        }
        else {
            toast.error("Please reCAPTCHA!");
        }
    }

    return (
        <div className="w-[500px] h-[675px] bg-white rounded-lg shadow-double px-[55px] py-[30px] flex flex-col items-center my-[50px]">
            <h2 className="text-[20px] text-[#212529] font-bold mb-[30px]">Register</h2>
            <div className="w-full flex flex-col justify-between items-center grow">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name*"
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <p className="hidden peer-invalid:block text-[12px] text-[#FF0000] w-full text-left">Email must be a valid email address</p>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <p className="hidden peer-invalid:block text-[12px] text-[#FF0000] w-full text-left">Email must be a valid email address</p>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password*"
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <p className="hidden peer-invalid:block text-[12px] text-[#FF0000] w-full text-left">Email must be a valid email address</p>
                <input
                    type="text"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <p className="hidden peer-invalid:block text-[12px] text-[#FF0000] w-full text-left">Email must be a valid email address</p>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={(e) => setState(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)}
                    className="peer w-full h-[44px] px-[15px] py-[9px] outline-none rounded-md border border-[#D1D1D1] text-[#919191]"
                />
                <ReCAPTCHA
                    sitekey="6LcOEVEpAAAAAM6bWj7Fh6h6AUcn0Gp4oDk2ve5I"
                    onChange={onChange}
                />
                <button
                    className="w-full h-[44px] rounded-sm bg-blue-primary text-white"
                    onClick={onsubmit}
                >Sign Up</button>
                <div className="flex justify-center text-blue-primary">
                    <p className="text-[15px] hover:underline cursor-pointer">Can&apos;t log in?</p>
                    <span>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
                    <Link className="text-[15px] hover:underline cursor-pointer" href={"/Login"}>Sign up for an account</Link>
                </div>
            </div>
        </div>
    )
}