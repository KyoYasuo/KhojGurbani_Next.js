'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubAudios } from "./SubAudios";
import { SubVideos } from "./SubVideos";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Audio {
    id: number;
    title: string;
    media_approve: number;
    author_name: string;
    attachment_name: string;
    duration: string;
}

interface Video {
    id: number;
    type: string;
    media_approve: number;
    author_name: string;
    attachment_name: string;
}

interface MediaData {
    katha_data: Audio[];
    Santhiya_data: Audio[];
    Kirtan_data: Audio[];
    podcast_media: Audio[];
    Featured_data: Video[];
    Discussion_data: Video[];
}

export const SriGuruMedia = ({ mediaData, setAudioOpen, setVideoOpen }: { mediaData: MediaData; setAudioOpen: any; setVideoOpen: any }) => {

    function handlePlay() {
        console.log("play");
    }

    function handleDownload() {
        console.log("download");
    }

    function handleDelete() {
        console.log("delete");
    }

    function handleApprove() {
        console.log("approve");
    }

    function handleReject() {
        console.log("reject");
    }

    return (
        <>
            <div className="mb-[42px] mt-[30px]">
                <h3 className="text-primary text-[26px] font-bold mb-[14px]">Audio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[21px]">
                    {
                        mediaData?.Santhiya_data.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Santhiya</h4>
                                <SubAudios audios={mediaData?.Santhiya_data} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} handlePlay={handlePlay} handleDownload={handleDownload} />
                            </div>
                            :
                            <></>
                    }
                    {
                        mediaData?.Kirtan_data.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Kirtan</h4>
                                <SubAudios audios={mediaData?.Kirtan_data} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} handlePlay={handlePlay} handleDownload={handleDownload} />
                            </div>
                            :
                            <></>
                    }
                    {
                        mediaData?.katha_data.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Katha</h4>
                                <SubAudios audios={mediaData?.katha_data} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} handlePlay={handlePlay} handleDownload={handleDownload} />
                            </div>
                            :
                            <></>
                    }
                    {
                        mediaData?.podcast_media.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Podcast</h4>
                                <SubAudios audios={mediaData?.podcast_media} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} handlePlay={handlePlay} handleDownload={handleDownload} />
                            </div>
                            :
                            <></>
                    }
                </div>
                <button onClick={() => setAudioOpen(true)} className="flex gap-1 items-center text-xs px-[24px] py-[8px] text-white bg-blue-primary hover:bg-blue-secondary rounded transition-all">
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Add Audio</p>
                </button>
            </div>
            <div className="mb-[42px]">
                <h3 className="text-primary text-[26px] font-bold mb-[14px]">Video</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[21px]">
                    {
                        mediaData?.Discussion_data.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Discussion Video</h4>
                                <SubVideos videos={mediaData?.Discussion_data} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} />
                            </div>
                            :
                            <></>
                    }
                    {
                        mediaData?.Featured_data.length > 0 ?
                            <div className="flex flex-col items-baseline gap-[14px]">
                                <h4 className="text-[21px] text-title">Featured Video</h4>
                                <SubVideos videos={mediaData?.Featured_data} handleApprove={handleApprove} handleReject={handleReject} handleDelete={handleDelete} />
                            </div>
                            :
                            <></>
                    }
                </div>
                <button onClick={() => setVideoOpen(true)} className="flex gap-1 items-center text-xs px-[24px] py-[8px] text-white bg-blue-primary hover:bg-blue-secondary rounded transition-all">
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Add Video</p>
                </button>
            </div>
        </>
    );
};