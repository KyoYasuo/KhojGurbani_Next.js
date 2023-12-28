"use client"

import Image from "next/image";
import { dateTransform } from "@/lib/data";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export default function HomeBanner(props: { recent: any; }) {
    const recent = props.recent

    const { playAudio } = useAudioPlayer();
    return (
        <>
            <div className="w-full h-20 sm:h-72 md:h-128 bg-top bg-cover bg-[url('/Images/Home/sm_homebanner.jpg')] sm:bg-[url('/Images/Home/homebanner.jpg')]">
                <div className="hidden mx-auto max-w-6xl px-4 py-12 md:block">
                    <h1 className="text-3xl font-bold text-white">{recent.title}</h1>
                    <p className="text-sm text-white">{dateTransform(recent.created_at)}</p>
                    <div className="flex gap-2 justify-between items-center max-w-[350px] md:mt-8">
                        <button
                            onClick={() => playAudio(recent.englishPodcastSrc, recent.title, recent.id)}
                            className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
                        >
                            English - ਅੰਗਰੇਜ਼ੀ
                        </button>
                        <button
                            onClick={() => playAudio(recent.punjabiPodcardSrc, recent.title, recent.id)}
                            className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-primary hover:bg-third transition-all"
                        >
                            Punjabi- ਪੰਜਾਬੀ
                        </button>
                        <svg fill="#6B7280CC" width="16px" height="16px" viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                        </svg>
                    </div>
                </div>
                <div className="hidden mx-auto max-w-6xl px-4 py-24 sm:flex flex-col gap-3 items-end justify-between">
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2tob2pndXJiYW5pL2ZlZWQueG1s" target="_blank">
                        <Image
                            src="/Images/Home/google_podcast.png"
                            alt="Google posdcast"
                            width={160}
                            height={42}
                            className="w-40 h-auto"
                        />
                    </a>
                    <a href="https://podcasts.apple.com/us/podcast/khojgurbani/id1435439834" target="_blank">
                        <Image
                            src="/Images/Home/apple_podcast.png"
                            alt="Apple Podcast"
                            width={160}
                            height={42}
                            className="w-40 h-auto"
                        />
                    </a>
                </div>
            </div>
            <div className="mx-auto px-4 py-4 flex gap-2 justify-around items-center md:hidden">
                <div>
                    <h1 className="text-1xl font-bold text-titleb text-center border-b-[1px] border-[#CCCCCC]">{recent.title}</h1>
                    <p className="text-xs text-line text-center">{dateTransform(recent.created_at)}</p>
                </div>
                <div className="flex gap-2 justify-between max-w-[350px] md:mt-8">
                    <button
                        onClick={() => playAudio(recent.englishPodcastSrc, recent.title, recent.id)}
                        className="text-sm text-white px-2 6 py-1 rounded-full border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
                    >
                        English
                    </button>
                    <button
                        onClick={() => playAudio(recent.punjabiPodcardSrc, recent.title, recent.id)}
                        className="text-sm text-white px-2 py-1 rounded-full border border-line bg-primary hover:bg-third transition-all"
                    >
                        Punjabi
                    </button>
                    <svg fill="#FFFFFF" width="12px" height="12px" viewBox="-160 0 512 512"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" />
                    </svg>
                </div>
            </div>
            <div className="mx-auto px-4 flex justify-center gap-4 sm:hidden">
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2tob2pndXJiYW5pL2ZlZWQueG1s" target="_blank">
                    <Image
                        src="/Images/Home/google_podcast.png"
                        alt="Google posdcast"
                        width={160}
                        height={42}
                        className="w-40 h-auto"
                    />
                </a>
                <a href="https://podcasts.apple.com/us/podcast/khojgurbani/id1435439834" target="_blank">
                    <Image
                        src="/Images/Home/apple_podcast.png"
                        alt="Apple Podcast"
                        width={160}
                        height={42}
                        className="w-40 h-auto"
                    />
                </a>
            </div>
        </>
    );
}