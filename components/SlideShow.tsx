"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Link from "next/link";
import Image from "next/image";
import { dateTransform } from '@/Lib/data';

export default function SlideShow(props: { featuredMedias: any; archives: any; showCount: any; }) {

    const featuredMedias = props.featuredMedias;
    const archives = props.archives;
    const showCount = props.showCount;

    return (
        <Swiper
            spaceBetween={8}
            slidesPerView={showCount}
        >
            {featuredMedias?.map((item: { id: number; title: string; thumbnail: string; }) => (
                <SwiperSlide key={item.id}>
                    <Link
                        href={""}
                        className="relative"
                    >
                        <div className="absolute top-4 left-4 text-white text-lg">{item.title}</div>
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={400}
                            height={300}
                        />
                    </Link>
                </SwiperSlide>
            ))}
            {archives?.map((item: { id: number; thumbnail: string; title: string; created_at: string; }) => (
                <SwiperSlide key={item.id}>
                    <Link
                        href={""}
                        className="relative"
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
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}