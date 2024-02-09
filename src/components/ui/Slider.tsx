'use client'

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Slider = ({ viewNum, loop }: { viewNum: number; loop: boolean }) => {

    const swiperRef = useRef(null);

    return (
        <Swiper
            ref={swiperRef}
            slidesPerView={viewNum}
            spaceBetween={10}
            loop={loop}
        >
        </Swiper>
    );
}