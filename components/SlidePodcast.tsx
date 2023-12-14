"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import { Autoplay } from 'swiper/modules';
import { useCallback, useRef } from 'react';

export default function SlidePodcast(props: { featuredMedias: any; showCount: any; }) {

    const featuredMedias = props.featuredMedias;
    const showCount = props.showCount;

    const swiperRef = useRef<any>(null);

    const navigateToNextSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    const navigateToPrevSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const { playAudio } = useAudioPlayer();

    return (
        <div className='gap-2 items-center relative'>
            <button
                onClick={() => navigateToPrevSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] left-2 xl:left-[-36px] z-10 transition-all'
            >
                <Image src='/Images/SVG/arrow_left.svg' alt='prev' width={16} height={16} />
            </button>
            <div className='w-full aspect-[16/10] md:aspect-[32/10] lg:aspect-[48/10] grow'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={showCount === 1 ? 0 : 8}
                    centeredSlides={showCount === 1 ? true : false}
                    slidesPerView={showCount}
                    // loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={showCount === 1 ? 500 : 1000}
                    loop={true}
                    modules={[Autoplay]}
                    className="w-full h-full overflow-visible"
                >
                    {featuredMedias?.map((item: { media: string; id: number; title: string; thumbnail: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => playAudio(item.media, item.title)}
                                className="relative cursor-pointer w-full h-[90%]"
                            >
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    fill
                                />
                                <div className="absolute top-2 left-2 text-white text-lg">{item.title}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button
                onClick={() => navigateToNextSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] right-2 xl:right-[-36px] z-10 transition-all'
            >
                <Image src='/Images/SVG/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div>
    );
}