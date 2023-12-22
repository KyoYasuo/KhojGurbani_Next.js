"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export default function CategoryMedias(props: {categoryMedias: { id: number; author_image: string; title: string; author_name: string; duration: string; attachment_name: string; }[]}) {

    const { playAudio } = useAudioPlayer();

    return (
        <>
            <div className="grid grid-col grid-cols-3 gap-8 mb-8">
                {props.categoryMedias.map((item: { id: number; author_image: string; title: string; author_name: string; duration: string; attachment_name: string;}) => (
                    <div
                        key={item.id}
                        className="hover:text-blue-primary text-[#767373] text-sm"
                        onClick={() => playAudio(item.attachment_name, item.author_name + " (" + item.title + ")", item.id)}
                    >
                        <img
                            src={item.author_image}
                            alt={item.title}
                            className=""
                        />
                        <div className="flex justify-between my-1">
                            <div className="">
                                {item.author_name}
                            </div>
                            <div className="">
                                {item.duration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}