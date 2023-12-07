'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
    { name: 'Login', href: '/Login', current: false },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {

    const curretPage: string = "Home";
    const [selectedPage, setSelectedPage] = useState(curretPage);

    useEffect(() => {
        const currentPage = localStorage.getItem('selectedPage');
        setSelectedPage(currentPage || '');
    }, []);

    return (
        <nav className="bg-primary fixed w-full z-50">

            <div className="mx-auto max-w-6xl px-4">

                <div className="h-16 flex flex-1 items-center justify-between">

                    <div className="flex flex-shrink-0 items-center">
                        <Image
                            src="/Images/logo2.png"
                            alt="Logo"
                            width={136}
                            height={32.5}
                        />
                    </div>

                    <div className="hidden sm:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={`${item.href}`}
                                className={classNames(
                                    selectedPage === item.name ? 'border-b-blue-primary border-b-2' : 'hover:bg-gray-700',
                                    'flex h-16 px-4 text-white items-center'
                                )}
                                onClick={() => {
                                    setSelectedPage(item.name);
                                    localStorage.setItem("selectedPage", item.name);
                                }}
                            >
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
}