'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ArchivePageNav({ totalPageCount, currentPage }: { totalPageCount: number, currentPage: number }) {
    const pageParams = useSearchParams();
    const { replace } = useRouter();

    function handleClick(term: string | null) {
        if (term === "<") {
            if (currentPage <= 1) return;
            term = currentPage - 1 + "";
        }
        if (term === ">") {
            if (currentPage >= totalPageCount) return;
            term = currentPage + 1 + "";
        }
        if (term === "First") term = 1 + "";
        if (term === "Last") term = totalPageCount + "";
        console.log(term);
        const params = new URLSearchParams(pageParams);
        if (term) {
            params.set('page', term);
        } else {
            params.delete('page');
        }
        replace(`/Home/Archivelist?${params.toString()}`);
    }

    return (
        <>
            <div className="bg-[#1B4154] w-full py-4">
                <div className='mx-auto px-4 flex max-w-xl justify-between'>

                    <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>First</div>
                    <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}> &lt; </div>
                    {currentPage >= 2 && <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>1</div>}
                    {currentPage >= 4 && <div className='cursor-pointer text-white text-center text-base grow'>...</div>}
                    {currentPage >= 3 && <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage - 1}</div>}
                    <div className='cursor-pointer text-white text-center text-base grow bg-[#007BFF]' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage}</div>
                    {currentPage <= totalPageCount - 2 && <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage + 1}</div>}
                    {currentPage <= totalPageCount - 3 && <div className='cursor-pointer text-white text-center text-base grow'>...</div>}
                    {currentPage <= totalPageCount - 1 && <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>{totalPageCount}</div>}
                    <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}> &gt; </div>
                    <div className='cursor-pointer text-white text-center text-base grow' onClick={(e) => handleClick(e.currentTarget.textContent)}>Last</div>

                </div>
            </div>
        </>
    );
}