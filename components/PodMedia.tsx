"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { dateTransform } from "@/lib/data";
import Image from "next/image";
import Highlighter from "react-highlight-words";

export default function PodMedia(props: { imgURL: string; title: string; description: string; query: string; media: string; created_at: string; }) {

    const { playAudio } = useAudioPlayer();

    return (
        <div className="flex flex-col sm:flex-row" onClick={() => playAudio(props.media)}>

            <div className="w-full sm:w-80 shrink-0" >

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    width={320}
                    height={220}
                    className="object-fill w-full rounded-md"
                />

            </div>

            <div className="flex flex-col px-4 pt-2 sm:pt-0">
                <div className="flex flex-col md:flex-row items-baseline gap-2 mb-4">
                    <h3 className="text-2xl text-blue-primary">
                        <Highlighter
                            searchWords={[props.query]}
                            autoEscape={true}
                            textToHighlight={props.title}
                        />
                    </h3>
                    <span className="text-xs text-blue-primary min-w-[80px]">{props.created_at && dateTransform(props.created_at)}</span>
                </div>

                <p className=" text-line">
                    <Highlighter
                        searchWords={[props.query]}
                        autoEscape={true}
                        textToHighlight={props.description}
                    />
                </p>

            </div>

        </div>
    );
}