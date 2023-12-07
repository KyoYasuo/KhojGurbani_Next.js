'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from "react";

function dateTransform(value: string): string {
    const dd: string = value.substr(8, 2);
    const MM: string = value.substr(5, 2);
    const yyyy: string = value.substr(0, 4);
    const months: { [key: string]: string } = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };
    const date: string = `${months[MM]} ${dd}, ${yyyy}`;
    return date;
  }

export default function SlideShow(props: { data: any; archive: any; showCount: any; }) {

    const data = props.data;
    const archive = props.archive;
    const featuredData = [];

    if (Array.isArray(data)) {
        for (let i of data) {
            if (i.featured > 0) featuredData.push(i);
        }
    }

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: props.showCount,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings}>
            {featuredData.map((item) => (
                <div key={item.id}>
                    <Link
                        href={""}
                        className="relative"
                    >
                        <div className="absolute top-4 left-4 text-white text-lg">{item.title}</div>
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={300}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </Link>
                </div>
            ))}
            {archive?.map((item: { id: Key | null | undefined; thumbnail: string; title: string; created_at: string; }) => (
                <div key={item.id}>
                    <Link
                        href={""}
                        className="relative"
                    >
                        <Image
                            src={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail}
                            alt={item.title}
                            width={300}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                        />
                        <div className="flex justify-between">
                            <div className="text-subtitle text-sm font-bold">{item.title}</div>
                            <div className="text-date text-xs font-bold">{dateTransform(item.created_at)}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </Slider>
    );
}