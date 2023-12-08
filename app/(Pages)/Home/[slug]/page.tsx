import PodMedia from "@/components/PodMedia";
import { getCatResults, getPodmedias, getSlugInfo, getSlugs } from "@/lib/data";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const slugs = await getSlugs();
    console.log('[HomeSubPage] generateStaticParams:', slugs);
    return slugs.map((slug: string) => ({ slug }));
}


export default async function HomeSubPage({ params: { slug } }: { params: { slug: string } }) {
    const pod_medias = await getPodmedias(slug);
    const slugInfo = await getSlugInfo(slug);
    console.log(slugInfo);
    return (
        <>
            <div className="w-full h-64 bg-right-top bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
            </div>
            {pod_medias.map((item: { id: number; thumbnail: string; title: string; description: string; }) => (
                <div key={item.id} className="flex flex-col mx-auto max-w-6xl p-4">
                    <PodMedia imgURL={item.thumbnail} title={item.title} description={item.description} />
                </div>
            ))}
        </>
    );
}