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
            <div className="w-full h-64 bg-right-top bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl p-4 pt-24 text-5xl font-bold text-white">Archive</h1>
            </div>
            <div className="mx-auto max-w-6xl p-4">
                <div className="my-6 flex justify-between">
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
                
                {archiveResult.map((item: { id: number; thumbnail: string; title: string; description: string; }) => (
                    <div key={item.id} className="py-4">
                        <PodMedia imgURL={"https://apiprod.khojgurbani.org/uploads/thumbnail/" + item.thumbnail} title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </>
    )
}