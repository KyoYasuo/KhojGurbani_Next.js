'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Login = () => {
    const pathname = usePathname();
    const isActive = pathname === '/login';
    return (
        <Link href='/login' className="text-white text-sm">
            <li
                className={clsx(
                    isActive ? 'border-b-2 border-white' : 'border-none',
                    'px-[15px] py-[20px]'
                )}
            >
                Login
            </li>
        </Link>
    );
}