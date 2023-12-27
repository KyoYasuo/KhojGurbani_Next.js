import MediaTable from "@/components/MedaiTable";
import { getRagiMedias } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function MediaRagiSubPage({ params: { ragi } }: { params: { ragi: string } }) {

    const ragiMedias = await getRagiMedias(ragi);

    return (
        <>
            <div className="relative w-full bg-center bg-cover bg-[url('/Images/Home/nitnem.jpg')] mb-32 sm:mb-24 md:mb-28 lg:mb-32">
                <h1
                    className="mx-auto max-w-6xl px-4 pt-6 sm:pt-12 md:pt-16 lg:pt-24 pb-20 sm:pb-20 md:pb-24 lg:pb-28 
                text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white"
                >{ragiMedias[0].author_name}</h1>
                <div className="absolute w-full -bottom-[80px] sm:-bottom-[90px] md:-bottom-[100px] lg:-bottom-[110px]">
                    <div className="flex mx-auto max-w-6xl px-4 justify-center sm:justify-normal">
                        <div className="bg-[#1F4457] p-1 rounded-full">
                            <Image
                                src={ragiMedias[0].author_image}
                                width={200}
                                height={200}
                                alt={ragiMedias[0].author_name}
                                className="rounded-full w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute w-full -bottom-28 sm:-bottom-20">
                    <div className="text-blue-primary text-lg font-bold text-center">
                        {ragiMedias.length} <span className="text-black font-normal ">Tracks</span>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <div className="my-6 text-sm flex flex-wrap">
                    <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        Media
                    </Link>
                    <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <Link href="/Media/Ragis" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        Ragi Directory
                    </Link>
                    <span className=" text-[#6C757D] text-[16px]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;{ragiMedias[0].author_name} </span>
                </div>
                <MediaTable medias={ragiMedias} />

            </div>
        </>
    );
}