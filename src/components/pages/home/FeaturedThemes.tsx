'use client'

import Link from "next/link";
import Image from "next/image";
import FeaturedTheme from "./FeaturedTheme";
import { SearchBar } from "@/components/ui/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export const FeaturedThemes = ({ cat_result }: { cat_result: any }) => {

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
        if (screenWidth >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [screenWidth]);

    return (
        <div className="mx-auto max-w-6xl px-4">
            <div className="mt-4 md:my-6 flex sm:flex-row flex-col-reverse gap-4 justify-between">
                <h2 className="text-[26px] font-bold text-primary">Featured Themes</h2>
                <SearchBar />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-8">
                {cat_result.map((item: { id: string; category_image: string; title: string; description: string; }) => (
                    <Link key={item.id} href={`/home/${item.id}`}>
                        <FeaturedTheme
                            imgURL={item.category_image}
                            title={item.title}
                            description={item.description}
                        />
                    </Link>
                ))}
            </div>
            <div className="md:hidden">
                <div className="w-full relative">
                    <button className="absolute transition-all z-10 left-4 xl:-left-12 top-1/2 -translate-y-1/2 bg-button rounded-full w-8 h-8 flex justify-center items-center">
                        <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
                    >
                        {cat_result.map((item: { id: number; category_image: string; title: string; }) => {
                            return (
                                <SwiperSlide key={item.id} className="shadow-common">
                                    <Image src={item.category_image} width={545} height={300} alt="featured theme" className="aspect-[370/218]" />
                                    <p className="text-primary text-sm font-bold p-2">{item.title}</p>
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