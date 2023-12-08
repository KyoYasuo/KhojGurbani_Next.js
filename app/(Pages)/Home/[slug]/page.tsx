import { getPodmedias, getSlugs } from "@/lib/data";

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//     const slugs = await getSlugs();
//     console.log('[HomeSubPage] generateStaticParams:', slugs);
//     return slugs.map((slug: string) => ({ slug }));
// }


export default async function HomeSubPage({ params: { slug } }: { params: { slug: string } }) {
    console.log(slug);
    const pod_medias = await getPodmedias(slug);
    console.log(pod_medias);
    return (
        <>
            {pod_medias.map((item: { id: number; title: string }) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </>
    );
}