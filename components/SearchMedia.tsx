"use client"

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import keyboardLayout from "@/lib/keyboard_layout";
import { getSearchMediaResult } from '@/lib/data';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const SearchMedia = (props: { allRagis: any; }) => {

    const searchParams = useSearchParams();

    const [search_keyword, setsearch_keyword] = useState('');
    const [search_option, setsearch_option] = useState('3');
    const [audio_author_id, setaudio_author_id] = useState('');

    const [searchedMedia, setsearchedMedia] = useState<any>();

    const [show, setShow] = useState(false);
    const [layoutName, setLayoutName] = useState<string>("default");
    const [selectedValue, setSelectedValue] = useState<string>("gurmukhi");
    const keyboard = useRef<any>();

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current && !divRef.current.contains(event.target as Node)
            ) {
                setShow(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const onChange = (input: string) => {
        setsearch_keyword(input);
        console.log("Input changed", input);
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onKeyPress = (button: string) => {
        console.log("Button pressed", button);

        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const allRagis = props.allRagis;
    const groups = Object.keys(allRagis);

    async function handleSearch() {
        const params = new URLSearchParams(searchParams);
        params.set('search_keyword', search_keyword);
        params.set('search_option', search_option);
        params.set('page', '1');
        params.set('limit', '25');
        params.set('res', 'media');
        params.set('language', 'english');
        params.set('content', 'audio');
        params.set('translation_author', '1');
        if (audio_author_id) {
            params.set('audio_author_id', audio_author_id);
        }
        else {
            params.delete('audio_author_id');
        }
        params.set('pageF', '1');
        params.set('pageT', '1430');

        setsearchedMedia(await getSearchMediaResult(params));
        console.log(searchedMedia);
    }

    const { isPlaying, pauseAudio, playAudio } = useAudioPlayer();
    const [mediaIndex, setMediaIndex] = useState<number | null>(null);

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-end md:gap-8 gap-4 mt-4">
                <div className='flex flex-col grow w-full sm:max-w-[35%]'>
                    <div className='text-sm text-[#808080] mb-[7px]'>Gurbani Search</div>
                    <div className='relative w-full' ref={divRef}>
                        <input
                            type="text"
                            className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] w-full h-10 px-[14px] py-[7px]'
                            onChange={(e) => setsearch_keyword(e.target.value)}
                            value={search_keyword}
                        />
                        <Image
                            src="/Images/Media/english.png"
                            alt="english"
                            width={200}
                            height={200}
                            className="absolute right-12 bottom-2 w-[42px] cursor-pointer"
                            onClick={() => {
                                if (show === false) setShow(true);
                                else if (show === true && selectedValue === 'english') setShow(false);
                                setSelectedValue('english');
                            }}
                        />
                        <Image
                            src="/Images/Media/punjabi.png"
                            alt="gurmukhi"
                            width={200}
                            height={200}
                            className="absolute right-1 bottom-2 w-[42px] cursor-pointer"
                            onClick={() => {
                                if (show === false) setShow(true);
                                else if (show === true && selectedValue === 'gurmukhi') setShow(false);
                                setSelectedValue('gurmukhi');
                            }}
                        />
                        <div className={(show ? " " : "hidden ") + "absolute right-0 sm:left-0 top-10 z-50 min-w-[400px] w-full"}>
                            <Keyboard
                                keyboardRef={(r: any) => (keyboard.current = r)}
                                layout={selectedValue === 'gurmukhi' ? keyboardLayout.gurmukhi : keyboardLayout.english}
                                layoutName={layoutName}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col grow w-full sm:max-w-[25%]'>
                    <div className='flex justify-between'>
                        <div className='text-sm text-[#808080] mb-[7px]'>Search Options</div>
                        <div className='text-sm text-[#808080] mb-[7px]'>i</div>
                    </div>
                    <select
                        value={search_option}
                        size={0}
                        className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px]'
                        onChange={(e) => setsearch_option(e.target.value)}
                    >
                        <option value="1">With the exact phase</option>
                        <option value="2">Begins with</option>
                        <option value="3">First letter (search in the begin)</option>
                        <option value="4">First letter (search anywhere)</option>
                        <option value="5">Match all words</option>
                        <option value="6">Match any words</option>
                        <option value="7">Match all words (partial)</option>
                        <option value="8">Match any words (partial)</option>
                    </select>
                </div>
                <div className='flex flex-col grow w-full sm:max-w-[25%]'>
                    <div className='text-sm text-[#808080] mb-[7px]'>Ragi</div>
                    <select
                        className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px]'
                        onChange={(e) => setaudio_author_id(e.target.value)}
                    >
                        <option value="">All</option>
                        {groups.map((group: string) => (
                            allRagis[group].map((item: { id: string; name: string; }) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))
                        ))}
                    </select>
                </div>
                <div className='flex flex-col grow w-full sm:max-w-[15%]'>
                    <button
                        className='text-white text-sm rounded-[3px] bg-blue-primary h-10 px-[10.5px] py-[5.25px]'
                        onClick={() => handleSearch()}
                    >
                        Search
                    </button>
                </div>
            </div>
            {searchedMedia && (searchedMedia?.length > 0 ?
                <div className='mt-4'>
                    <table className="border-collapse rounded-t-md overflow-hidden w-full">
                        <thead className="bg-[#094457]">
                            <tr className="border border-[#094457]">
                                <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[5%]">#</th>
                                <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[30%]">Ragi</th>
                                <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[12.5%]">Action</th>
                                <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[12.5%]">Duration</th>
                                <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[40%]">Shabad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchedMedia?.slice(0, 25).map((
                                group: {
                                    id: number; name: string; duration: string; attachment_name: string; Author: string; Melody: string;
                                    Scripture: string; ScriptureRomanEnglish: string, Page: string, ShabadID: string
                                }[],
                                index: number
                            ) => (
                                <>
                                    <tr key={index} className="border">
                                        <td
                                            rowSpan={group.length}
                                            className='text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top border'
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            className='text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top border-y'
                                        >
                                            {group[0].name}
                                        </td>
                                        <td className='px-[15px] py-[12px] align-top border-y'>
                                            <button
                                                className=""
                                                onClick={() => {
                                                    if (mediaIndex === group[0].id) {
                                                        if (isPlaying) {
                                                            pauseAudio();
                                                        } else {
                                                            playAudio(group[0].attachment_name, group[0].name, group[0].id.toString());
                                                        }
                                                        return;
                                                    }
                                                    setMediaIndex(group[0].id);
                                                    playAudio(group[0].attachment_name, group[0].name, group[0].id.toString());
                                                }}
                                            >
                                                {
                                                    mediaIndex === group[0].id ?
                                                        (
                                                            isPlaying ?
                                                                <img src="/Images/SVG/pause.svg" alt="pause" className="cursor-pointer w-9 h-9" />
                                                                :
                                                                <img src="/Images/SVG/play.svg" alt="play" className="cursor-pointer w-9 h-9" />
                                                        ) :
                                                        (
                                                            <img src="/Images/SVG/preplay.svg" alt="preplay" className="cursor-pointer w-9 h-9" />
                                                        )
                                                }
                                            </button>
                                        </td>
                                        <td
                                            className='text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top border-y'
                                        >
                                            {group[0].duration}
                                        </td>
                                        <td
                                            rowSpan={group.length}
                                            className='px-[15px] py-[12px] align-top border'
                                        >
                                            <div className="cursor-pointer text-[#2D8DAC] text-base hover:underline text-left font-bold pb-1 leading-normal">
                                                {group[0].ScriptureRomanEnglish}
                                            </div>
                                            <div className="cursor-pointer text-[#252638] text-sm hover:underline hover:text-blue-primary text-left font-normal leading-normal">
                                                {group[0].Scripture}
                                            </div>
                                            <div className="text-[#707070] text-sm text-left font-normal leading-normal">
                                                Page {group[0].Page} Shabad {group[0].ShabadID} - {group[0].Author} - {group[0].Melody}
                                            </div>
                                        </td>
                                    </tr>
                                    {group.slice(1).map((item: { id: number; name: string; duration: string; attachment_name: string; }) => (
                                        <tr key={item.id}>
                                            <td
                                                className='text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top border-y'
                                            >
                                                {item.name}
                                            </td>
                                            <td className='px-[15px] py-[12px] align-top border-y'>
                                                <button
                                                    className=""
                                                    onClick={() => {
                                                        if (mediaIndex === item.id) {
                                                            if (isPlaying) {
                                                                pauseAudio();
                                                            } else {
                                                                playAudio(item.attachment_name, item.name, item.id.toString());
                                                            }
                                                            return;
                                                        }
                                                        setMediaIndex(item.id);
                                                        playAudio(item.attachment_name, item.name, item.id.toString());
                                                    }}
                                                >
                                                    {
                                                        mediaIndex === item.id ?
                                                            (
                                                                isPlaying ?
                                                                    <img src="/Images/SVG/pause.svg" alt="pause" className="cursor-pointer w-9 h-9" />
                                                                    :
                                                                    <img src="/Images/SVG/play.svg" alt="play" className="cursor-pointer w-9 h-9" />
                                                            ) :
                                                            (
                                                                <img src="/Images/SVG/preplay.svg" alt="preplay" className="cursor-pointer w-9 h-9" />
                                                            )
                                                    }
                                                </button>
                                            </td>
                                            <td
                                                className='text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top border-y'
                                            >
                                                {item.duration}
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div >
                : <div> No Result </div>)}
        </>
    );
};

export default SearchMedia;