'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function ArchivePageNav({ totalPageCount, currentPage }: { totalPageCount: number, currentPage: number }) {
    const pageParams = useSearchParams();
    const { replace } = useRouter();

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
        const params = new URLSearchParams(pageParams);

        if (resolvedTerm) {
            params.set('page', resolvedTerm);
            replace(`/Home/Archivelist?${params.toString()}`);
        } else {
            params.delete('page');
        }
    };

    const classNameTemp = "cursor-pointer text-white text-center text-base max-w-[24px] grow";

    return (
        <>
            <div className="bg-[#1B4154] w-full py-4">
                <div className='mx-auto px-4 flex max-w-xl justify-between'>

                    <div className="cursor-pointer text-white text-center text-base max-w-[32px] grow" onClick={(e) => handleClick(e.currentTarget.textContent)}>First</div>
                    <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>&lt;</div>
                    {currentPage >= 2 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>1</div>}
                    {currentPage >= 4 && <div className={classNameTemp}>...</div>}
                    {currentPage >= 3 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage - 1}</div>}
                    <div className='cursor-pointer text-white text-center text-base max-w-[24px] grow bg-[#007BFF]' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage}</div>
                    {currentPage <= totalPageCount - 2 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage + 1}</div>}
                    {currentPage <= totalPageCount - 3 && <div className={classNameTemp}>...</div>}
                    {currentPage <= totalPageCount - 1 && <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>{totalPageCount}</div>}
                    <div className={classNameTemp} onClick={(e) => handleClick(e.currentTarget.textContent)}>&gt;</div>
                    <div className="cursor-pointer text-white text-center text-base max-w-[32px] grow" onClick={(e) => handleClick(e.currentTarget.textContent)}>Last</div>

                </div>
            </div>
        </>
    );
}