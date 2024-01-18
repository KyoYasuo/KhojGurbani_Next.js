"use client"
import { useRouter } from "next/navigation";

export default function Ang(props: { currentPage: string }) {

    const currentPage = props.currentPage;
    const router = useRouter();

    const page = [];
    let i = 1;
    while (i < 1430) {
        page.push(<option key={i}>{i}</option>);
        i++;
    }
    return (
        <div className="flex items-center justify-between w-[240px]">
            <svg fill="#000000" version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="28px" height="28px" viewBox="0 0 30.725 30.725">
                <g>
                    <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                </g>
            </svg>
            <div className="text-[28px]">
                Ang
            </div>
            <select
                value={currentPage}
                // size={0}
                className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px] bg-white'
                onChange={(e) => router.push(`/SriGuruGranthSahib/${e.target.value}`)}
            >
                {page}
            </select>
            <svg fill="#000000" version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="28px" height="28px" viewBox="0 0 30.729 30.729">
                <g>
                    <path d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0L24.813,15.366z" />
                </g>
            </svg>
        </div>
    );
}