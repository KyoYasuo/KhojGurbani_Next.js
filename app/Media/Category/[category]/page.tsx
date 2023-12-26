import MediaTable from "@/components/MedaiTable";
import { getCategoryMedias, getMediaCategories, getMediaCategoryInfo, getSubCategoryMedias } from "@/lib/data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CategoryMedias from "@/components/CategoryMedias";

export default async function MediaCategoryPage({ params: { category } }: { params: { category: string } }) {

    const mediaCategoryInfo = await getMediaCategoryInfo(category);

    if (mediaCategoryInfo.sub_category_count > 0) {

        const mediaCateories = await getMediaCategories(category);

        return (
            <>
                <div className="w-full bg-center bg-cover bg-[url('/Images/Media/ragis.jpg')]">
                    <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">{mediaCategoryInfo.name}</h1>
                </div>
                <div className="max-w-6xl px-4 mx-auto">

                    <div className="flex flex-wrap my-6 text-sm">
                        <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                            Media
                        </Link>
                        <span className=" text-[#6C757D] text-[16px]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;{mediaCategoryInfo.name}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {mediaCateories.map((item: { name: string; id: string; attachment_name: string; }) => (
                            <Link
                                key={item.id}
                                href={`/Media/Category/${category}/${item.id}`}
                                className="text-[#2D3032] hover:text-blue-primary shadow-common"
                            >
                                <div className="relative">
                                    <img
                                        src={item.attachment_name}
                                        alt={item.name}
                                        className="w-full"
                                    />
                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-lg font-bold
                                    after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-white after:w-10
                                    before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-b-2 before:border-white before:w-10"
                                    >
                                        {item.name}
                                    </div>
                                </div>
                                <div className="flex justify-between p-[15px]">
                                    <div className="text-[20px] font-bold">
                                        {item.name}
                                    </div>
                                    <div className="text-[12px] w-[30px] h-[30px] border-2 border-[#9f9f9f] rounded-full flex justify-center items-center">
                                        <ArrowRightIcon className="w-4 h-4" strokeWidth={4} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        );

    }

    else {

        const categoryMedias = await getCategoryMedias(category);

        return (
            <>
                <div className="w-full bg-center bg-cover bg-[url('/Images/Media/ragis.jpg')]">
                    <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">{mediaCategoryInfo.name}</h1>
                </div>
                <div className="max-w-6xl px-4 mx-auto mb-8">
                    <div className="my-6 text-sm">
                        <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                            Media
                        </Link>
                        <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                        <span className=" text-[#6C757D] text-[16px]">{mediaCategoryInfo.name}</span>
                    </div>
                    <CategoryMedias categoryMedias={categoryMedias} />
                </div>
            </>
        );
    }
}