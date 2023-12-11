"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";
import { dateTransform } from '@/lib/data';

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';

export default function SlideShow(props: { featuredMedias: any; archives: any; showCount: any; }) {

    const featuredMedias = props.featuredMedias;
    const archives = props.archives;
    const showCount = props.showCount;

    const { playAudio } = useAudioPlayer();

    return (
        <Swiper
            spaceBetween={8}
            slidesPerView={showCount}
            autoplay={{ delay: 3000 }}
            loop={true}
        >
            {featuredMedias?.map((item: { media: string; id: number; title: string; thumbnail: string;}) => (
                <SwiperSlide key={item.id}>
                    <div
                        onClick={() => playAudio(item.media)}
                        className="relative cursor-pointer"
                    >
                        <div className="absolute top-4 left-4 text-white text-lg">{item.title}</div>
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={400}
                            height={300}
                        />
                    </div>
                </SwiperSlide>
            ))}
            {archives?.map((item: { attachment_name: string; id: number; thumbnail: string; title: string; created_at: string; }) => (
                <SwiperSlide key={item.id}>
                    <div
                        onClick={() => playAudio(item.attachment_name)}
                        className="relative cursor-pointer"
                    >
                        <Image
                            src={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail}
                            alt={item.title}
                            width={300}
                            height={200}
                        />
                        <div className="flex justify-between">
                            <div className="text-subtitle text-sm font-bold">{item.title}</div>
                            <div className="text-date text-xs font-bold">{dateTransform(item.created_at)}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}