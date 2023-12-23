import React, { useState } from 'react';

const SearchMedia = () => {

    return (
        <div className="flex justify-between items-end gap-8">
            <div className='flex flex-col w-80 grow'>
                <div className='text-sm text-[#808080] mb-[7px]'>Gurbani Search</div>
                <input
                    type="text"
                    className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[14px] py-[7px]'
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className='flex flex-col grow'>
                <div className='flex justify-between'>
                    <div className='text-sm text-[#808080] mb-[7px]'>Search Options</div>
                    <div className='text-sm text-[#808080] mb-[7px]'>i</div>
                </div>
                <select
                    value="option3"
                    // onChange={(e) => setFirstSelectValue(e.target.value)}
                    className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px]'
                >
                    {/* Replace with your options */}
                    <option value="option1">With the exact phase</option>
                    <option value="option2">Begins with</option>
                    <option value="option3">First letter (search in the begin)</option>
                    <option value="option4">First letter (search anywhere)</option>
                    <option value="option5">Match all words</option>
                    <option value="option6">Match any words</option>
                    <option value="option7">Match all words (partial)</option>
                    <option value="option8">Match any words (partial)</option>
                </select>
            </div>
            <div className='flex flex-col grow'>
                <div className='text-sm text-[#808080] mb-[7px]'>Ragi</div>
                <select
                    // value={secondSelectValue}
                    // onChange={(e) => setSecondSelectValue(e.target.value)}
                    className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px]'
                >
                    {/* Replace with your options */}
                    <option value="">Select option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
            </div>
            <div className='flex flex-col grow'>
                <button
                    // onClick={() => handleSearch()}
                    className='text-white text-sm rounded-[3px] bg-blue-primary h-10 px-[10.5px] py-[5.25px]'
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchMedia;