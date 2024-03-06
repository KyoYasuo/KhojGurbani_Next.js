'use client'

import { DeleteButton } from "@/components/ui/DeleteButton";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PlayPauseButton } from "@/components/ui/PlayPauseButton";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Audio {
    id: number;
    title: string;
    media_approve: number;
    author_name: string;
    attachment_name: string;
    duration: string;
}

export const SubAudios = (
    { audios, handleDelete, handlePlay, handleDownload, handleApprove, handleReject }:
        { audios: Audio[]; handleDelete: (id: number) => void; handlePlay: () => void; handleDownload: (id: number) => void; handleApprove: (id: number) => void; handleReject: (id: number) => void; }) => {

    const [expand, setExpand] = useState(false);

    return (
        <>
            {audios.slice(0, expand ? audios.length : 3).map((item: Audio) => (
                <div key={item.id} >
                    <div className="flex gap-[7px]">
                        <PlayPauseButton onClick={handlePlay} isPlaying={false} isSelected={false} size={1} />
                        <DownloadButton onClick={() => handleDownload(item.id)} size={1} />
                        <div className="flex flex-col ml-[7px] items-baseline">
                            <p className="text-sm text-title">
                                {item.title.split(' ').slice(0, 4).join(' ')}
                                &nbsp;
                                <span className="text-duration">
                                    {item.duration}
                                </span>
                            </p>
                            {item.media_approve === 0 ?
                                <div className="flex gap-4 mt-2">
                                    <button onClick={() => handleApprove(item.id)} className="flex gap-2 items-center text-approve text-sm">
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className="">Approve</span>
                                    </button>
                                    <button onClick={() => handleReject((item.id))} className="flex gap-2 items-center text-reject text-sm">
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span>Reject</span>
                                    </button>
                                </div>
                                :
                                <DeleteButton onClick={() => handleDelete(item.id)} />
                            }
                        </div>
                    </div>
                </div>
            ))}
            {audios.length > 3 ?
                <button onClick={() => setExpand(!expand)} className="text-xs px-[24px] py-[8px] text-white bg-blue-primary hover:bg-blue-secondary rounded transition-all">
                    {expand ? 'Hide All' : 'Show All'}
                </button>
                :
                <></>
            }
        </>
    )
}