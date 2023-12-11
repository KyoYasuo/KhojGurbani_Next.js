'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ArchivePageNav({totalPageCount, currentPage}: {totalPageCount: number, currentPage: number}) {
    const pageParams = useSearchParams();
    const { replace } = useRouter();

    function handleClick(term: string | null) {
        if (term === "<") {
            if (currentPage <= 1) return;
            term = currentPage - 1 + "";
        }
        if (term === ">"){
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
            <div className="flex justify-center bg-[#1B4154] w-full gap-x-5 py-4">
                <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>First</div>
                <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}> &lt; </div>
                {currentPage >= 2 && <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>1</div>}
                {currentPage >= 4 && <div className='cursor-pointer text-white text-base py-1 px-2'>...</div>}
                {currentPage >= 3 && <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage - 1}</div>}
                <div className='cursor-pointer text-white text-base py-1 px-2 bg-[#007BFF]' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage}</div>
                {currentPage <= totalPageCount - 2 && <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>{currentPage + 1}</div>}
                {currentPage <= totalPageCount - 3 && <div className='cursor-pointer text-white text-base py-1 px-2'>...</div>}
                {currentPage <= totalPageCount - 1 && <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>{totalPageCount}</div>}
                <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}> &gt; </div>
                <div className='cursor-pointer text-white text-base py-1 px-2' onClick={(e) => handleClick(e.currentTarget.textContent)}>Last</div>
            </div>
        </>
    );
}