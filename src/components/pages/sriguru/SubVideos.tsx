'use client'

import { DeleteButton } from "@/components/ui/DeleteButton";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Video {
    id: number;
    type: string;
    media_approve: number;
    author_name: string;
    attachment_name: string;
}

export const SubVideos = ({ videos, handleDelete, handleApprove, handleReject }: { videos: Video[]; handleDelete: (id: number) => void; handleApprove: (id: number) => void; handleReject: (id: number) => void; }) => {

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="w-full"
            >
                {videos.map((item: Video) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-baseline gap-6">
                            <iframe src={item.attachment_name} className="w-full aspect-video"></iframe>
                            {item.media_approve === 0 ?
                                <div className="flex gap-2">
                                    <button onClick={() => handleApprove(item.id)} className="flex gap-1 items-center text-xs px-[24px] py-[8px] rounded bg-approve text-white">
                                        <p>Approve</p>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <button onClick={() => handleReject(item.id)} className="flex gap-1 items-center text-xs px-[24px] py-[8px] rounded bg-reject text-white">
                                        <p>Reject</p>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                                :
                                <DeleteButton onClick={() => handleDelete(item.id)} />
                            }
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}