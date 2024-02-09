"use client"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const Ang = ({ currentPage }: { currentPage: string }) => {

    const router = useRouter();

    const page = [];
    let i = 1;
    while (i <= 1430) {
        page.push(<option key={i}>{i}</option>);
        i++;
    }

    return (
        <div className="flex items-center justify-between w-[240px]">
            <FontAwesomeIcon icon={faAngleLeft} />
            <div className="text-[28px]">
                Ang
            </div>
            <select
                value={currentPage}
                // size={0}
                className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px] bg-white'
                onChange={(e) => router.push(`/sriguru/${e.target.value}`)}
            >
                {page}
            </select>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
}