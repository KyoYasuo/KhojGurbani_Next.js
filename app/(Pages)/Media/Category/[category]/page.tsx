import MediaTable from "@/components/MedaiTable";
import { getMediaCategories } from "@/lib/data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function MediaCategoryPage({ params: { category } }: { params: { category: string } }) {

    const mediaCateories = await getMediaCategories(category);

    return (
        <>
            <div className="w-full bg-center bg-cover bg-[url('/Images/Media/ragis.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Ragi Directory</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    {mediaCateories.map((item: { name: string; id: number; attachment_name: string; }) => (
                        <Link
                            key={item.id}
                            href={`/Media/Category/${item.name}`}
                            className="text-[#2D3032] hover:text-blue-primary shadow-common"
                        >
                            <img
                                src={item.attachment_name}
                                alt={item.name}
                                className=""
                            ></img>
                            <div className="flex justify-between p-[15px]">
                                <div className="text-[20px] font-bold">
                                    {item.name}
                                </div>
                                <div className="text-[12px] w-[30px] h-[30px] border-2 border-[#9f9f9f] rounded-full flex justify-center items-center">
                                    <ArrowRightIcon className="w-4 h-4 [&>path]:stroke-[2]" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}