'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { date_transform } from "@/utils/date_transform"

export const Archive = ({ archive }: { archive: any }) => {

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
            setSlidesPerView(4);
        } else if (screenWidth >= 768) {
            setSlidesPerView(3);
        } else if (screenWidth >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [screenWidth]);

    return (
        <div className="max-w-6xl px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-primary">Featured Podcasts</h2>
            <div className="w-full relative">
                <button className="absolute transition-all z-10 left-4 xl:-left-12 top-1/2 -translate-y-1/2 bg-button rounded-full w-8 h-8 flex justify-center items-center">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                </button>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                >
                    {archive.map((item: { id: number; thumbnail: string; title: string; created_at: string; }) => {
                        return (
                            <SwiperSlide key={item.id} className="group cursor-pointer">
                                <Image src={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail} width={345} height={232} alt="archive" className="aspect-[370/218]" />
                                <div className="flex justify-between items-baseline mt-[10px]">
                                    <p className="text-primary text-sm font-bold group-hover:text-blue-primary">{item.title}</p>
                                    <p className="text-line-primary text-xs font-bold">{date_transform(item.created_at)}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className="absolute transition-all z-10 right-4 xl:-right-12 top-1/2 -translate-y-1/2 bg-button rounded-full w-8 h-8 flex justify-center items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                </button>
            </div>
        </div>
    )
}