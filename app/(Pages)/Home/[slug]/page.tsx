import PodMedia from "@/components/PodMedia";
import Search from "@/components/Search";
import { getPodmedias, getSlugInfo, getSlugs } from "@/lib/data";
import Link from "next/link";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const slugs = await getSlugs();
    return slugs.map((slug: string) => ({ slug }));
}


export default async function HomeSubPage({ params: { slug } }: { params: { slug: string } }) {
    const pod_medias = await getPodmedias(slug);
    const slugInfo = await getSlugInfo(slug);
    return (
        <>
            <div className="w-full h-32 sm:h-48 md:h-64 bg-right-top bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl p-4 pt-8 sm:pt-16 md:pt-24 text-5xl font-bold text-white">{slugInfo.title}</h1>
            </div>
            <div className="mx-auto max-w-6xl p-4">
                <div className="my-6 flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="">
                        <Link href="/Home">
                            <div className="hover:text-blue-primary hover:underline text-black inline">
                                Home
                            </div>
                        </Link>
                        <span className=" text-subtitle"> / {slugInfo.title} </span>
                    </div>
                    <Search />
                </div>

                {pod_medias.map((item: { id: number; thumbnail: string; title: string; description: string; attachment_name: string}) => (
                    <div key={item.id} className="py-4">
                        <PodMedia imgURL={item.thumbnail} title={item.title} description={item.description} query={""} media={item.attachment_name}/>
                    </div>
                ))}

            </div>
        </>
    );
}