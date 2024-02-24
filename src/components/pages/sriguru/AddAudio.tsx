'use client'

import Link from "next/link";
import { useState } from "react";

export const AddAudio = ({ audioOpen, setAudioOpen }: { audioOpen: boolean; setAudioOpen: any; }) => {

    const shabadId = [];
    let i = 1;
    while (i <= 3620) {
        shabadId.push(<option key={i}>{i}</option>);
        i++;
    }

    const [formData, setFormData] = useState<FormData>();

    function handleClose() {
        setAudioOpen(false);
    }

    function handleAdd() {
        console.log("audio add");
    }

    return (
        <div className={`relative z-20 ${audioOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>

            <div className="fixed top-[50px] left-1/2 -translate-x-1/2 w-[500px] flex flex-col rounded-md overflow-hidden">
                <h4 className="text-[21px] leading-[1.5] text-white p-[14px] bg-main">Add audio</h4>
                <div className="p-[14px] bg-white text-primary flex flex-col">
                    <form className="">
                        <label htmlFor="type" className="text-base">Select Source</label>
                        <select name="type" id="type" className="mb-6 text-base cursor-pointer px-[10px] py-[5px] w-full border border-gray-secondary rounded outline-none">
                            <option value="S3" className="">S3</option>
                            <option value="Audio" className="">Audio</option>
                            <option value="External URL" className="">External URL</option>
                        </select>
                        <label htmlFor="fileInput" className="">
                            <div className="mb-6 flex justify-between border border-gray-secondary rounded overflow-hidden">
                                <div className="bg-white px-[10px] py-[5px]">Choose audio file</div>
                                <div className="bg-gray-primary px-[10px] py-[5px] border-l border-gray-secondary">Browse</div>
                            </div>
                            <input type="file" id="fileInput" name="fileInput" className="hidden" />
                        </label>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col">
                                <label htmlFor="duration" className="">Duration (sec)</label>
                                <input type="text" id="duration" name="duration" className="mb-6 text-base px-[10px] py-[5px] border border-gray-secondary rounded outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="author_id" className="">Shabad</label>
                                <select id="author_id" name="author_id" className="w-56 text-base px-[10px] py-[5px] border border-gray-secondary rounded outline-none">
                                    {shabadId}
                                </select>
                                <Link href={`/sriguru/shabad/1`} className="text-blue-primary text-sm hover:underline">Find Shabad Id</Link>
                            </div>
                        </div>
                        <label htmlFor="type" className="text-base">Select Source</label>
                        <select name="type" id="type" className="mb-6 text-base cursor-pointer px-[10px] py-[5px] w-full border border-gray-secondary rounded outline-none">
                            <option value="S3" className="">S3</option>
                            <option value="Audio" className="">Audio</option>
                            <option value="External URL" className="">External URL</option>
                        </select>
                    </form>
                </div>
                <div className="flex justify-end items-center bg-white p-[14px] border-t">
                    <button className="px-[10px] py-[5px] hover:bg-slate-200 text-sm rounded-sm transition-all"
                        onClick={handleClose}>
                        Close
                    </button>
                    <button className="px-[10px] py-[5px] ml-[18px] bg-blue-primary hover:bg-blue-secondary text-sm text-white rounded-sm transition-all"
                        onClick={handleAdd}>
                        Add
                    </button>

                </div>
            </div>
        </div>
    )
}