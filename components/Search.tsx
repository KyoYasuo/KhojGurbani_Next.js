'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Search() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`/Home/Podcastlist?${params.toString()}`);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.length < 2) {
                toast.warn("You must type more than 1 letter!");
                return;
            }
            handleSearch(e.currentTarget.value);
        }
    }

    return (
        <>
            <div className="relative w-full sm:w-80 h-10">
                <input
                    className="absolute w-full right-0 rounded-md shadow-common py-2 pl-4 pr-6 text-base outline-none placeholder:text-[#BDBDBD]"
                    placeholder="Search Podcast"
                    onKeyDown={handleKeyDown}
                    minLength={2}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-5 w-5 text-[#7F7F7F] stroke-[3px] -translate-y-1/2" />
            </div>
        </>
    );
}