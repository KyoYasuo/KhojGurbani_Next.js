import { tinos } from "@/app/font";
import { getCommentaryList, getShabad, getShabadMedia, getShabadPages } from "@/lib/data";
import clsx from 'clsx';
import Link from "next/link";
import SriGuruMedia from "./SriGuruMedia";



export default async function SriGuru(props: { route: string, item: string }) {

    const route = props.route;
    const item = props.item;
    const shabadData = await getShabad(`${route}/${item}`);
    const pages = await getShabadPages(`${route}/${item}`);
    const commentaryList = await getCommentaryList(item);
    const shabadMedia = await getShabadMedia(item);
    return (
        <div className="">
            <div className="bg-[#1B4154] flex items-center gap-6 w-full h-[70px] px-4 rounded-md">
                <p className="text-[16px] text-white">SABAD</p>
                <div className="flex gap-2">
                    {pages.map((page: number) => (
                        <Link
                            key={page}
                            href={`/SriGuruGranthSahib/${route}/${page}`}
                            className={clsx(
                                "cursor-pointer w-8 h-8 rounded-full text-[11px] text-white hover:underline flex items-center justify-center",
                                {
                                    "bg-[#0B79BE]": item === page.toString(),
                                    "bg-[#2E596F]": item != page.toString(),
                                }
                            )}
                        >
                            {page}
                        </Link>
                    ))}
                </div>
            </div>
            {shabadData?.scriptures.map((scripture: {
                id: number; Scripture: string; ScriptureOriginal: string; ScriptureRoman: string;
                translation: {
                    KhojgurbaaniEnglish: string | null; ManmohanSinghEnglish: string | null; SantSinghKhalsaEnglish: string | null;
                    HarbansSinghPunjabi: string | null; ManmohanSinghPunjabi: string | null; SahibSinghPunjabi: string | null;
                }
            }) => (
                <div
                    key={scripture.id}
                    className="mt-4 leading-loose"
                >
                    <h3 className="text-[32px] text-[#000000]">
                        {scripture.Scripture}
                    </h3>
                    <p className="text-[22px] text-[#212529]">
                        {scripture.ScriptureOriginal}
                    </p>
                    <p className="text-[22px] text-[#212529]">
                        {scripture.ScriptureRoman}
                    </p>
                    {scripture.translation.KhojgurbaaniEnglish ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">KG</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.KhojgurbaaniEnglish}</div>
                        </div>
                        :
                        <></>
                    }
                    {scripture.translation.ManmohanSinghEnglish ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">MS</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.ManmohanSinghEnglish}</div>
                        </div>
                        :
                        <></>
                    }
                    {scripture.translation.SantSinghKhalsaEnglish ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">SK</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.SantSinghKhalsaEnglish}</div>
                        </div>
                        :
                        <></>
                    }
                    {scripture.translation.HarbansSinghPunjabi ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">HS</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.HarbansSinghPunjabi}</div>
                        </div>
                        :
                        <></>
                    }
                    {scripture.translation.ManmohanSinghPunjabi ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">MS</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.ManmohanSinghPunjabi}</div>
                        </div>
                        :
                        <></>
                    }
                    {scripture.translation.SahibSinghPunjabi ?
                        <div className="flex gap-2">
                            <div className="text-[20px] font-bold text-blue-primary">SS</div>
                            <div className="text-[20px] text-[#212529]">{scripture.translation.SahibSinghPunjabi}</div>
                        </div>
                        :
                        <></>
                    }
                </div>
            ))}
            {commentaryList?.commentary ?
                <div className="">
                    <h3 className="text-[26px] text-[#252636] font-bold">Commentary</h3>
                    <div className="py-[23px] px-[15px] shadow-common">
                        <div
                            dangerouslySetInnerHTML={{ __html: commentaryList.commentary }}
                            className={`${tinos.className} antialiased text-[20px] h-[260px] overflow-hidden [&_p]:text-[#5C5B5B] [&_p]:mb-[14px] mb-[14px]`}
                        />
                        <div className="flex justify-end">
                            <button className="cursor-pointer flex bg-blue-primary items-center text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                                <span className="">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3 group-hover:scale-105 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }

            <SriGuruMedia shabadMedia={shabadMedia} />

            
        </div>
    );
}