import Image from "next/image";
import LanguageButton from "./LanguageButton";
import { dateTransform } from "@/Lib/data";

export default function HomeBanner(props: { recent: any; }) {
    const recent = props.recent
    return (
        <div className="w-full h-128 bg-right-top bg-cover bg-[url('/Images/Home/homebanner.jpg')]">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <h1 className="text-3xl font-bold text-white">{recent.title}</h1>
                <p className="text-sm text-white">{dateTransform(recent.created_at)}</p>
                <LanguageButton></LanguageButton>
            </div>
            <div className="my-24 mx-auto max-w-6xl h-24 px-4 flex flex-col items-end justify-between">
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
    );
}