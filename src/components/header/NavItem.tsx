'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItem = ({ href, children }: { href: string; children: JSX.Element | string }) => {
    const pathname = usePathname();
    const isActive = `/${pathname.split("/")[1]}` === href;
    return (    
        <li className="flex w-full lg:w-auto">
            <Link
                href={href}
                className={clsx(
                    isActive ? ' border-b-4 border-blue-primary' : 'border-none',
                    'px-[15px] py-[20px] text-white text-sm'
                )}
            >
                {children}
            </Link>
        </li>
    );
}