import MediaTable from "@/components/MedaiTable";
import { getRagiMedias } from "@/lib/data";
import Link from "next/link";

export default async function MediaRagiSubPage({ params: { ragi } }: { params: { ragi: string } }) {

    const ragiMedias = await getRagiMedias(ragi);

    return (
        <>
            <div className="w-full bg-center bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">{ragiMedias[0].author_name}</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <div className="my-6 text-sm">
                    <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        Media
                    </Link>
                    <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <Link href="/Media/Ragis" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        Ragi Directory
                    </Link>
                    <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <span className=" text-[#6C757D] text-[16px]">{ragiMedias[0].author_name} </span>
                </div>
                <MediaTable medias={ragiMedias} />

            </div>
        </>
    );
}