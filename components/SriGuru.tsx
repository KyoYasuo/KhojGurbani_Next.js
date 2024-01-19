import { getCommentaryList, getShabad, getShabadPages } from "@/lib/data";
import clsx from 'clsx';
import Link from "next/link";

export default async function SriGuru(props: { route: string, item: string }) {

    const route = props.route;
    const item = props.item;
    const shabadData = await getShabad(`${route}/${item}`);
    const pages = await getShabadPages(`${route}/${item}`);
    const commentaryList = await getCommentaryList(item);
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
                    <div
                        dangerouslySetInnerHTML={{ __html: commentaryList.commentary }}
                        className=""
                    />
                </div>
                :
                <></>
            }

        </div>
    );
}