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
                    <div className="flex gap-2 justify-between max-w-[350px] md:mt-8">
                        <button
                            onClick={() => playAudio(recent.englishPodcastSrc, recent.title)}
                            className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
                        >
                            English - ਅੰਗਰੇਜ਼ੀ
                        </button>
                        <button
                            onClick={() => playAudio(recent.punjabiPodcardSrc, recent.title)}
                            className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-primary hover:bg-third transition-all"
                        >
                            Punjabi- ਪੰਜਾਬੀ
                        </button>
                        <Image
                            src="/Images/SVG/info-svgrepo-com.svg"
                            alt="iSVG"
                            width={16}
                            height={16}
                            className="hidden cursor-pointer md:block"
                        />
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
                        onClick={() => playAudio(recent.englishPodcastSrc, recent.title)}
                        className="text-sm text-white px-2 6 py-1 rounded-full border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
                    >
                        English
                    </button>
                    <button
                        onClick={() => playAudio(recent.punjabiPodcardSrc, recent.title)}
                        className="text-sm text-white px-2 py-1 rounded-full border border-line bg-primary hover:bg-third transition-all"
                    >
                        Punjabi
                    </button>
                    <Image
                        src="/Images/SVG/info-svgrepo-com.svg"
                        alt="iSVG"
                        width={16}
                        height={16}
                        className="hidden cursor-pointer md:block"
                    />
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