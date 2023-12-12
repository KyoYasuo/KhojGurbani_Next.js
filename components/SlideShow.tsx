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
import { useCallback, useRef } from 'react';

export default function SlideShow(props: { featuredMedias: any; archives: any; cat_results: any; showCount: any; }) {

    const featuredMedias = props.featuredMedias;
    const archives = props.archives;
    const cat_results = props.cat_results;
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
        <div className='flex gap-2 items-center relative'>
            <button onClick={() => navigateToPrevSlide()} className='bg-slate-700 rounded-full p-2 absolute left-0 md:static z-10'>
                <Image src='/Images/SVG/arrow_left.svg' alt='prev' width={16} height={16} />
            </button>
            <div className='w-full md:w-[90%] aspect-[16/10] md:aspect-[48/10] grow'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={showCount === 1 ? 0 : 8}
                    centeredSlides={showCount === 1 ? true : false}
                    slidesPerView={showCount}
                    // loop={true}
                    autoplay={featuredMedias ? {
                        delay: 4000,
                        disableOnInteraction: false,
                    } : false}
                    speed={showCount === 1 ? 500 : 1000}
                    loop={featuredMedias ? true : false}
                    modules={[Autoplay]}
                    className="w-full h-full overflow-visible"
                >
                    {featuredMedias?.map((item: { media: string; id: number; title: string; thumbnail: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => playAudio(item.media)}
                                className="relative cursor-pointer w-full h-full"
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
                    {archives?.map((item: { attachment_name: string; id: number; thumbnail: string; title: string; created_at: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => playAudio(item.attachment_name)}
                                className="relative cursor-pointer w-full h-[90%]"
                            >
                                <Image
                                    src={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail}
                                    alt={item.title}
                                    fill
                                />
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-between">
                                <div className="text-subtitle text-sm font-bold">{item.title}</div>
                                <div className="text-date text-xs font-bold">{dateTransform(item.created_at)}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {cat_results?.map((item: { id: number; category_image: string; title: string; }) => (
                        <SwiperSlide key={item.id}>
                            <Link key={item.id} href={`/Home/${item.id}`} className='relative cursor-pointer w-full h-full'>
                                <div className='relative cursor-pointer w-full h-[90%]'>
                                    <Image
                                        src={item.category_image}
                                        alt={item.title}
                                        fill
                                    />
                                </div>
                                <div className="text-subtitle text-md text-center font-bold">{item.title}</div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button onClick={() => navigateToNextSlide()} className=' bg-slate-700 rounded-full p-2 absolute right-0 md:static z-10'>
                <Image src='/Images/SVG/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div>
    );
}