"use client"

import Link from "next/link";
import { createRef, useRef } from "react";

export default function Groups(props: { allRagis: any; }) {

    const allRagis = props.allRagis;
    const groups = Object.keys(allRagis);

    // Initialize divRefs as an object with a ref for each group
    // let divRefs = groups.reduce((acc, group) => {
    //     acc[group] = createRef();
    //     return acc;
    // }, {});

    // const scrollToDiv = (group) => {
    //     // Access the ref directly from divRefs object
    //     const selectedRef = divRefs[group];
    //     if (selectedRef && selectedRef.current) {
    //         selectedRef.current.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });
    //     }
    // };


    return (
        <>
            <div className="flex justify-center my-4">
                {groups.map((group: string) => (
                    <div
                        key={group}
                        className="text-[#646464] text-base font-bold rounded-full w-[30px] h-[30px] bg-[#DCDCDC] m-[5px] flex items-center justify-center"
                    // onClick={() => scrollToDiv(group)}
                    >
                        <p>{group}</p>
                    </div>
                ))}
            </div>
            {groups.map((group: string) => (
                <div key={group} className="flex flex-col mb-8 shadow-common">
                    <div className="relative h-8 mb-2">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="28px" height="28px" viewBox="0 0 173.000000 170.000000"
                            preserveAspectRatio="xMidYMid meet"
                            className="w-8 h-8 mx-auto"
                        >
                            <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)"
                                fill="#6B6B6B" stroke="none">
                                <path
                                    d="M150 1067 l0 -632 347 -200 c191 -110 352 -200 358 -200 6 0 167 90 358 199 l347 200 0 633 0 633 -705 0 -705 0 0 -633z" />
                            </g>
                        </svg>
                        <span className="absolute w-full top-[2px] text-center text-sm text-white font-normal">{group}</span>
                    </div>
                    <div className="grid grid-cols-6 gap-[14px] px-6">
                        {allRagis[group].map((item: { id: number; name: string; description: string; attachment_name: string; }) => (
                            <Link
                                key={item.id}
                                href={`/Media/${item.id}`}
                                className="cursor-pointer"
                            >
                                <img className="" src={item.attachment_name} />
                                <div className="text-[#424242] text-sm my-3">{item.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}