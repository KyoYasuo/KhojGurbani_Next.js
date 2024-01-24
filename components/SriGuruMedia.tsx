"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import ButtonPlay from "./ButtonPlay";
import { useRef, useState } from "react";
import ButtonDown from "./ButtonDown";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function getFirstFourWords(inputString: string) {
    const words = inputString.split(/\s+/);

    if (words.length > 4) {
        return words.slice(0, 4).join(' ');
    }

    return inputString;
}

export default function SriGuruMedia(props: { shabadMedia: any }) {

    const { shabadMedia } = props;

    const { isPlaying, pauseAudio, playAudio } = useAudioPlayer();
    const [mediaid, setMediaid] = useState<number | null>(null);

    const swiperRef_1 = useRef<any>(null);
    const swiperRef_2 = useRef<any>(null);


    return (
        <div className="">
            <h3 className="text-[26px] text-[#252636] font-bold mb-[15px]">Audio</h3>
            <div className="grid grid-cols-2">
                <div className="mb-[15px]">
                    <h4 className="text-[#212529] text-[21px] mb-[15px]">Santhiya</h4>
                    {
                        shabadMedia.Santhiya_data.map((media: { id: number; title: string; duration: string; attachment_name: string; author_name: string }) => {
                            return (
                                <div key={media.id} className="flex gap-2 mb-[15px]">
                                    <div className="flex gap-2">
                                        <button
                                            className="w-[24px] h-[24px]"
                                            onClick={() => {
                                                if (mediaid === media.id) {
                                                    if (isPlaying) {
                                                        pauseAudio();
                                                    } else {
                                                        playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                                    }
                                                    return;
                                                }
                                                setMediaid(media.id);
                                                playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                            }}
                                        >
                                            <ButtonPlay isPlaying={isPlaying} type={mediaid === media.id} width={24} height={24} />
                                        </button>
                                        <button
                                            className="w-[24px] h-[24px]"
                                        // onClick={ }
                                        >
                                            <ButtonDown width={24} height={24} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">
                                            <span className="text-[14px] text-[#212529] inline">{getFirstFourWords(media.title)}</span>
                                            <span className="text-[14px] text-[#9A9A9A] inline ml-2">{media.duration}</span>
                                        </div>
                                        <button className="mr-auto cursor-pointer flex bg-[#DC3545] items-center justify-start text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                            <span className="">Delete</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 group-hover:scale-105 transition-all fill-white">
                                                <path
                                                    d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mb-[15px]">
                    <h4 className="text-[#212529] text-[21px] mb-[15px]">Kirtan</h4>
                    {
                        shabadMedia.Kirtan_data.map((media: { id: number; title: string; duration: string; attachment_name: string; author_name: string }) => {
                            return (
                                <div key={media.id} className="flex gap-2 mb-[15px]">
                                    <div className="flex gap-2">
                                        <button
                                            className="w-[24px] h-[24px]"
                                            onClick={() => {
                                                if (mediaid === media.id) {
                                                    if (isPlaying) {
                                                        pauseAudio();
                                                    } else {
                                                        playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                                    }
                                                    return;
                                                }
                                                setMediaid(media.id);
                                                playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                            }}
                                        >
                                            <ButtonPlay isPlaying={isPlaying} type={mediaid === media.id} width={24} height={24} />
                                        </button>
                                        <button
                                            className="w-[24px] h-[24px]"
                                        // onClick={ }
                                        >
                                            <ButtonDown width={24} height={24} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">
                                            <span className="text-[14px] text-[#212529] inline">{getFirstFourWords(media.title)}</span>
                                            <span className="text-[14px] text-[#9A9A9A] inline ml-2">{media.duration}</span>
                                        </div>
                                        <button className="mr-auto cursor-pointer flex bg-[#DC3545] items-center justify-start text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                            <span className="">Delete</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 group-hover:scale-105 transition-all fill-white">
                                                <path
                                                    d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mb-[15px]">
                    <h4 className="text-[#212529] text-[21px] mb-[15px]">Katha</h4>
                    {
                        shabadMedia.katha_data.map((media: { id: number; title: string; duration: string; attachment_name: string; author_name: string }) => {
                            return (
                                <div key={media.id} className="flex gap-2 mb-[15px]">
                                    <div className="flex gap-2">
                                        <button
                                            className="w-[24px] h-[24px]"
                                            onClick={() => {
                                                if (mediaid === media.id) {
                                                    if (isPlaying) {
                                                        pauseAudio();
                                                    } else {
                                                        playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                                    }
                                                    return;
                                                }
                                                setMediaid(media.id);
                                                playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                            }}
                                        >
                                            <ButtonPlay isPlaying={isPlaying} type={mediaid === media.id} width={24} height={24} />
                                        </button>
                                        <button
                                            className="w-[24px] h-[24px]"
                                        // onClick={ }
                                        >
                                            <ButtonDown width={24} height={24} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">
                                            <span className="text-[14px] text-[#212529] inline">{getFirstFourWords(media.title)}</span>
                                            <span className="text-[14px] text-[#9A9A9A] inline ml-2">{media.duration}</span>
                                        </div>
                                        <button className="mr-auto cursor-pointer flex bg-[#DC3545] items-center justify-start text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                            <span className="">Delete</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 group-hover:scale-105 transition-all fill-white">
                                                <path
                                                    d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mb-[15px]">
                    <h4 className="text-[#212529] text-[21px] mb-[15px]">Podcast</h4>
                    {
                        shabadMedia.podcast_media.map((media: { id: number; title: string; duration: string; attachment_name: string; author_name: string }) => {
                            return (
                                <div key={media.id} className="flex align-top gap-2 mb-[15px]">
                                    <div className="flex items-start gap-2">
                                        <button
                                            className="w-[24px] h-[24px]"
                                            onClick={() => {
                                                if (mediaid === media.id) {
                                                    if (isPlaying) {
                                                        pauseAudio();
                                                    } else {
                                                        playAudio(media.attachment_name, `${media.author_name} (${media.title})`, media.id.toString());
                                                    }
                                                    return;
                                                }
                                                setMediaid(media.id);
                                                playAudio(media.attachment_name, `${media.title}`, media.id.toString());
                                            }}
                                        >
                                            <ButtonPlay isPlaying={isPlaying} type={mediaid === media.id} width={24} height={24} />
                                        </button>
                                        <button
                                            className="w-[24px] h-[24px]"
                                        // onClick={ }
                                        >
                                            <ButtonDown width={24} height={24} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">
                                            <span className="text-[14px] text-[#212529] inline">{getFirstFourWords(media.title)}</span>
                                            <span className="text-[14px] text-[#9A9A9A] inline ml-2">{media.duration}</span>
                                        </div>
                                        <button className="mr-auto cursor-pointer flex bg-[#DC3545] items-center justify-start text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                            <span className="">Delete</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 group-hover:scale-105 transition-all fill-white">
                                                <path
                                                    d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <h3 className="text-[26px] text-[#252636] font-bold mb-[15px]">Video</h3>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h4 className="text-[#212529] text-[21px] mb-[15px]">Discussion Video</h4>
                        <div className="flex gap-2">
                            <div
                                className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#808080] hover:bg-slate-200"
                                onClick={() => { swiperRef_1.current.swiper.slidePrev(); }}
                            >
                                <svg fill="#808080" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px" height="16px" viewBox="0 0 30.725 30.725"
                                    className=""
                                >
                                    <g>
                                        <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#808080] hover:bg-slate-200"
                                onClick={() => { swiperRef_1.current.swiper.slideNext(); }}
                            >
                                <svg fill="#808080" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px" height="16px" viewBox="0 0 30.729 30.729"
                                    className=""
                                >
                                    <g>
                                        <path d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0L24.813,15.366z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        ref={swiperRef_1}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {
                            shabadMedia.Discussion_data?.map((video: { id: number; attachment_name: string }) => {
                                return (
                                    <SwiperSlide key={video.id}>
                                        <div className="flex flex-col gap-4">
                                            <iframe src={video.attachment_name} key={video.id} className="w-full h-auto"></iframe>
                                            {/* <button className="mr-auto cursor-pointer flex bg-[#DC3545] items-center justify-start text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                                <span className="">Delete</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 group-hover:scale-105 transition-all fill-white">
                                                    <path
                                                        d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                </svg>
                                            </button> */}
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h4 className="text-[#212529] text-[21px] mb-[15px]">Featured Video</h4>
                        <div className="flex gap-2">
                            <div
                                className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#808080] hover:bg-slate-200"
                            >
                                <svg fill="#808080" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px" height="16px" viewBox="0 0 30.725 30.725"
                                    className=""
                                >
                                    <g>
                                        <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#808080] hover:bg-slate-200"
                            >
                                <svg fill="#808080" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px" height="16px" viewBox="0 0 30.729 30.729"
                                    className=""
                                >
                                    <g>
                                        <path d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0L24.813,15.366z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        ref={swiperRef_2}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {
                            shabadMedia.Featured_data?.map((video: { id: number; attachment_name: string }) => {
                                return (
                                    <SwiperSlide key={video.id}>
                                        <iframe src={video.attachment_name} key={video.id} className="w-full h-[300px] mt-4"></iframe>

                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}