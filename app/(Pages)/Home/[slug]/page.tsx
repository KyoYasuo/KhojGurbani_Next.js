import PodMedia from "@/components/PodMedia";
import { getPodmedias, getSlugInfo, getSlugs } from "@/lib/data";
import Link from "next/link";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const slugs = await getSlugs();
    return slugs.map((slug: string) => ({ slug }));
}


export default async function HomeSubPage({ params: { slug } }: { params: { slug: string } }) {
    if (slug === "search") {

    }
    const pod_medias = await getPodmedias(slug);
    const slugInfo = await getSlugInfo(slug);
    return (
        <>
            <div className="w-full h-64 bg-right-top bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl p-4 pt-24 text-5xl font-bold text-white">{slugInfo.title}</h1>
            </div>
            <div className="mx-auto max-w-6xl p-4">
                <div className="my-6 flex justify-between">
                    <div className="">
                        <Link href="/Home">
                            <div className="hover:text-blue-primary hover:underline text-black inline">
                                Home
                            </div>
                        </Link>
                        <span className=" text-subtitle"> / {slugInfo.title} </span>
                    </div>
                    <form className="shadow-common h-10 px-4 rounded-lg">
                        <input
                            id="search_val"
                            name="searchval"
                            placeholder="Search Podcast"
                            type="text"
                            className=" text-xl h-full border-none outline-none"
                        />
                        <span></span>
                    </form>
                </div>

                {pod_medias.map((item: { id: number; thumbnail: string; title: string; description: string; }) => (
                    <div key={item.id} className="py-4">
                        <PodMedia imgURL={item.thumbnail} title={item.title} description={item.description} />
                    </div>
                ))}

            </div>
        </>
    );
}