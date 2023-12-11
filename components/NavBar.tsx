'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
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
    const [isOn, setIsOn] = useState(false);
    const [selectedPage, setSelectedPage] = useState(curretPage);

    useEffect(() => {
        const currentPage = localStorage.getItem('selectedPage');
        setSelectedPage(currentPage || '');
    }, []);

    return (
        <div className={classNames('lg:h-16 transition-height duration-300', isOn? 'h-[432px]' : 'h-12')}>

            <nav className="bg-primary fixed w-full z-50">

                <div className="mx-auto max-w-6xl px-4">

                    <div className="h-12 lg:h-16 flex flex-1 items-center justify-between">

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
                                    className={classNames(
                                        selectedPage === item.name ? 'border-b-blue-primary border-b-2' : 'hover:bg-gray-700',
                                        'flex h-16 px-4 text-white items-center text-center'
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
                                        selectedPage === item.name ? 'border-b-blue-primary border-b-2' : 'hover:bg-gray-700',
                                        'flex h-12 px-4 text-white items-center text-center'
                                    )}
                                    onClick={() => {
                                        setIsOn(false);
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
            </nav >
        </div>
    );
}