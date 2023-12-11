'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`Podcastlist?${params.toString()}`);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
        }
    }

    return (
        <div className="relative flex w-48">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Search Podcast"
                onKeyDown={handleKeyDown}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}