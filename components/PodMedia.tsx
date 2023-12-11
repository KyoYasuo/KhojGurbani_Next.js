"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import Image from "next/image";
import Highlighter from "react-highlight-words";

export default function PodMedia(props: { imgURL: string; title: string; description: string; query: string; media: string; }) {

    const { playAudio } = useAudioPlayer();

    return (
        <div className="flex flex-col sm:flex-row" onClick={() => playAudio(props.media)}>

            <div className="relative w-full sm:w-80 shrink-0" >

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    width={320}
                    height={220}
                    className="object-fill w-full rounded-md"
                />

            </div>

            <div className="flex flex-col px-4 pt-2 sm:pt-0">

                <h3 className="text-2xl text-blue-primary">
                    <Highlighter
                        searchWords={[props.query]}
                        autoEscape={true}
                        textToHighlight={props.title}
                    />
                </h3>
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