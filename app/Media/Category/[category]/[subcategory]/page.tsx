import MediaTable from "@/components/MedaiTable";
import { getMediaCategories, getMediaCategoryInfo, getSubCategoryMediaInfo, getSubCategoryMedias } from "@/lib/data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CategoryMediaTable from "@/components/CategoryMediaTable";

export default async function MediaSubCategoryPage({ params: { category, subcategory } }: { params: { category: string, subcategory: string } }) {

    const mediaSubCategories = await getSubCategoryMedias(subcategory);
    const mediaCategoryInfo = await getMediaCategoryInfo(category);
    const mediaSubCategoryInfo = await getSubCategoryMediaInfo(category,subcategory);

    return (
        <>
            <div className="w-full bg-center bg-cover bg-[url('/Images/Media/ragis.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">{mediaSubCategoryInfo.name}</h1>
            </div>

            <div className="max-w-6xl px-4 mx-auto mb-8">
                <div className="my-6 text-sm">
                    <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        Media
                    </Link>
                    <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <Link href={`/Media/Category/${category}`} className="hover:text-blue-primary hover:underline text-[#252638] inline">
                        {mediaCategoryInfo.name}
                    </Link>
                    <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <span className=" text-[#6C757D] text-[16px]">{mediaSubCategoryInfo.name}</span>
                </div>
                <CategoryMediaTable medias={mediaSubCategories} />
            </div>
        </>
    );
}