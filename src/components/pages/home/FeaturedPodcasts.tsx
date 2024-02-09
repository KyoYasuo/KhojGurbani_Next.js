'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

export const FeaturedPodcasts = ({ featured_podcasts }: { featured_podcasts: any }) => {

    const swiperRef = useRef(null);

    const [screenWidth, setScreenWidth] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (screenWidth >= 1024) {
            setSlidesPerView(3);
        } else if (screenWidth >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [screenWidth]);

    return (
        <div className="w-full md:py-16 bg-left-top bg-cover md:bg-[url('/images/home/homebottom.png')]">
            <div className="max-w-6xl px-4 mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-primary md:text-white">Featured Podcasts</h2>
                <div className="w-full relative">
                    <button className="absolute transition-all z-10 left-4 xl:-left-12 top-1/2 -translate-y-1/2 bg-button rounded-full w-8 h-8 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
                        loop={true}
                    >
                        {featured_podcasts.map((item: { id: number; thumbnail: string; }) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Image src={item.thumbnail} width={571} height={382} alt="featured podcast" className="aspect-[370/218]" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <button className="absolute transition-all z-10 right-4 xl:-right-12 top-1/2 -translate-y-1/2 bg-button rounded-full w-8 h-8 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}