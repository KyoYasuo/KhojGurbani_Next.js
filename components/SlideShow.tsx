"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";
import { dateTransform } from '@/lib/data';

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';

export default function SlideShow(props: { featuredMedias: any; archives: any; cat_results: any; showCount: any; }) {

    const featuredMedias = props.featuredMedias;
    const archives = props.archives;
    const cat_results = props.cat_results;
    const showCount = props.showCount;

    const { playAudio } = useAudioPlayer();

    return (
        <Swiper
            spaceBetween={showCount === 1 ? 0 : 8}
            centeredSlides={showCount === 1 ? true : false}
            slidesPerView={showCount}
            // loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            {featuredMedias?.map((item: { media: string; id: number; title: string; thumbnail: string; }) => (
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
                        className="cursor-pointer"
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
            {cat_results?.map((item: { id: number; category_image: string; title: string; }) => (
                <SwiperSlide key={item.id}>
                    <Link key={item.id} href={`/Home/${item.id}`} className='relative aspect-[545/300]'>
                        <Image
                            src={item.category_image}
                            alt={item.title}
                            width={545}
                            height={300}
                            className='w-full h-full object-fill'
                        />
                        <div className="text-subtitle text-sm text-center font-bold">{item.title}</div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}