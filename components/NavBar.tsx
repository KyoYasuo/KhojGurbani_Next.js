'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSession, signOut } from "next-auth/react"

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/Home', current: true },
    { name: 'Sri Guru Granth Sahib', href: '/SriGuruGranthSahib', current: false },
    { name: 'Commentary', href: '/Commentary', current: false },
    { name: 'Dictionary', href: '/Dictionary', current: false },
    { name: 'Glossary', href: '/Glossary', current: false },
    { name: 'Media', href: '/Media', current: false },
    { name: 'Gubani Search', href: '/GubaniSearch', current: false },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {

    const { data: session } = useSession()
    const [isOn, setIsOn] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <div className={classNames('transition-height duration-300', isOn ? 'h-[432px]' : 'h-16')}>

            <nav className="bg-primary fixed w-full z-50">

                <div className="mx-auto max-w-6xl px-4">

                    <div className="h-16 flex flex-1 items-center justify-between transition-height duration-300">

                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/Home">
                                <Image
                                    src="/Images/logo.png"
                                    alt="Logo"
                                    width={136}
                                    height={39}
                                    priority
                                    className='h-auto'
                                />
                            </Link>
                        </div>

                        <div className="hidden lg:flex">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={`${item.href}`}
                                    className='flex h-16 px-4 text-white items-center text-center text-sm'
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            {session ?
                                <div
                                    className='flex h-16 px-4 text-white items-center text-center text-sm cursor-pointer'
                                    onClick={() => {
                                        setIsOn(false);
                                        signOut();
                                    }}
                                >
                                    <img
                                        src={session.user?.image || "/Images/logo.png"}
                                        alt='user'
                                        width={45}
                                        height={45}
                                    />
                                </div>
                                :
                                <Link
                                    href="/Login"
                                    className={classNames(
                                        'flex h-16 px-4 text-white items-center text-center text-sm'
                                    )}
                                >
                                    <span>Login</span>
                                </Link>
                            }
                        </div>

                        <Bars3Icon className="cursor-pointer w-8 h-8 text-white border-2 border-gray-700 hover:bg-gray-700 lg:hidden"
                            onClick={() => setIsOn(!isOn)} />

                    </div>
                    <div className={classNames(
                        'overflow-hidden lg:hidden transition-height duration-300',
                        isOn === true ? 'h-96' : 'h-0',
                    )}>
                        <div className='flex flex-col'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={`${item.href}`}
                                    className={classNames(
                                        // selectedPage === item.name ? 'border-b-blue-primary border-b-2' : 'hover:bg-gray-700',
                                        'flex h-12 px-4 text-white items-center text-center'
                                    )}
                                    onClick={() => {
                                        setIsOn(false);
                                        // setSelectedPage(item.name);
                                        // localStorage.setItem("selectedPage", item.name);
                                    }}
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            {session ?
                                <div
                                    className='flex h-12 px-4 text-white items-center text-center cursor-pointer'
                                    onClick={() => {
                                        setIsOn(false);
                                        signOut();
                                    }}
                                >
                                    <span>Logout</span>
                                </div>
                                :
                                <Link
                                    key="Login"
                                    href="/Login"
                                    className='flex h-12 px-4 text-white items-center text-center'
                                    onClick={() => {
                                        setIsOn(false);
                                    }}
                                >
                                    <span>Login</span>
                                </Link>
                            }
                        </div>
                    </div>
                </div>

            </nav >
        </div>
    );
}