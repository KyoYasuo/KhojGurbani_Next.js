'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function MeidaPageNav(
    { totalPageCount, currentPage, setCurrentPage }: { totalPageCount: number, currentPage: number, setCurrentPage: (currentPage: number) => void }) {

    async function termChange(term: string | null) {
        if (term === "<") {
            if (currentPage <= 1) return;
            else term = (currentPage - 1).toString();
        }
        if (term === ">") {
            if (currentPage >= totalPageCount) return;
            else term = (currentPage + 1).toString();
        }
        if (term === "First") term = "1";
        if (term === "Last") term = totalPageCount.toString();

        return Promise.resolve(term);
    }

    const handleClick = async (term: string | null) => {
        const resolvedTerm = await termChange(term);
        setCurrentPage(parseInt(resolvedTerm || "1"));
    };

    const classNameTemp = "cursor-pointer text-[#212529] text-center text-sm px-[10px] py-[7px]";

    return (
        <>
            {totalPageCount > 1 &&

                <div className='flex gap-1 sm:justify-end justify-center'>

                <div className="cursor-pointer text-[#212529] text-center text-sm px-[10px] py-[7px]" onClick={(e) => handleClick(e.currentTarget.textContent)}>First</div>
                <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>&lt;</div>
                {currentPage >= 2 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>1</div>}
                {currentPage >= 4 && <div className={classNameTemp}>...</div>}
                {currentPage >= 3 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage - 1}</div>}
                <div className='cursor-pointer text-white text-center text-sm px-[10px] py-[7px] bg-[#007BFF]' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage}</div>
                {currentPage <= totalPageCount - 2 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage + 1}</div>}
                {currentPage <= totalPageCount - 3 && <div className={classNameTemp}>...</div>}
                {currentPage <= totalPageCount - 1 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{totalPageCount}</div>}
                <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>&gt;</div>
                <div className="cursor-pointer text-[#212529] text-center text-sm px-[10px] py-[7px]" onClick={(e) => handleClick(e.currentTarget.textContent)}>Last</div>

            </div>
            }
        </>
    );
}