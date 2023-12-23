import ArchivePageNav from "@/components/ArchivePageNav";
import PodMedia from "@/components/PodMedia";
import Search from "@/components/Search";
import { getAllArchiveResult, getArchivePageCount } from "@/lib/data";
import Link from "next/link";

export default async function ArchivelistPage({
    searchParams,
}: {
    searchParams?: {
        page?: string;
    };
}) {
    const page = searchParams?.page || '1';
    const pageCout = await getArchivePageCount(page);
    const archiveResult = await getAllArchiveResult(page);

    return (
        <>
            <div className="w-full h-24 sm:h-36 md:h-48 lg:h-64 bg-top bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl p-4 pt-8 sm:pt-16 md:pt-20 lg:pt-24 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Archive</h1>
            </div>
            <div className="mx-auto max-w-6xl p-4">
                <div className="my-6 flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="">
                        <Link href="/Home">
                            <div className="hover:text-blue-primary hover:underline text-black inline">
                                Home
                            </div>
                        </Link>
                        <span className=" text-subtitle"> / Archive </span>
                    </div>
                    <Search />
                </div>
                <ArchivePageNav totalPageCount={pageCout} currentPage={parseInt(page)} />
                {archiveResult.map((item: {
                    created_at: string; id: string; thumbnail: string; title: string; description: string; attachment_name: string
                }) => (
                    <div key={item.id} className="py-4">
                        <PodMedia id={item.id} imgURL={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail} title={item.title} description={item.description} query={""} media={item.attachment_name} created_at={item.created_at} />
                    </div>
                ))}
                <ArchivePageNav totalPageCount={pageCout} currentPage={parseInt(page)} />
            </div>
        </>
    )
}