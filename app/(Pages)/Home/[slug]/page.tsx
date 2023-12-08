import PodMedia from "@/components/PodMedia";
import { getPodmedias, getSlugs } from "@/lib/data";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const slugs = await getSlugs();
    console.log('[HomeSubPage] generateStaticParams:', slugs);
    return slugs.map((slug: string) => ({ slug }));
}


export default async function HomeSubPage({ params: { slug } }: { params: { slug: string } }) {
    console.log(slug);
    const pod_medias = await getPodmedias(slug);
    return (
        <>
            {pod_medias.map((item: { id: number; thumbnail: string; title: string; description: string; }) => (
                <div key={item.id} className="flex flex-col">
                    <PodMedia imgURL={item.thumbnail} title={item.title} description={item.description} />
                </div>
            ))}
        </>
    );
}