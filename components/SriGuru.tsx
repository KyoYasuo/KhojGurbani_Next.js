"use client"

import { tinos } from "@/app/font";
import clsx from 'clsx';
import Link from "next/link";
import SriGuruMedia from "./SriGuruMedia";
import { useRouter } from "next/navigation";



export default function SriGuru(props: { route: string, item: string, shabadData: any, pages: any, commentaryList: any, shabadMedia: any }) {

    const { route, item, pages, shabadData, commentaryList, shabadMedia } = props;

    const router = useRouter();
    const page = [];
    let i = 1;
    while (i < 1430) {
        page.push(<option key={i}>{i}</option>);
        i++;
    }
    return (
        <div className="">
            <div className="flex items-center justify-between w-[240px]">
                <svg fill="#000000" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px" height="28px" viewBox="0 0 30.725 30.725">
                    <g>
                        <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                    </g>
                </svg>
                <div className="text-[28px]">
                    Ang
                </div>
                <select
                    value={route}
                    // size={0}
                    className='outline-none border border-[#C5C5C5] text-[#42403F] text-sm rounded-[3px] h-10 px-[3.5px] py-[7px] bg-white'
                    onChange={(e) => router.push(`/SriGuruGranthSahib/${e.target.value}`)}
                >
                    {page}
                </select>
                <svg fill="#000000" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px" height="28px" viewBox="0 0 30.729 30.729">
                    <g>
                        <path d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0L24.813,15.366z" />
                    </g>
                </svg>
            </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-3 h-3 group-hover:scale-105 transition-all">
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