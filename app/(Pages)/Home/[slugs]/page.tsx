import { getPodmedias } from "@/lib/data"

export default async function HomeSubPage({ params: { slug } }) {
    const pod_medias = await getPodmedias(slug);
    return (
        <>
            {pod_medias.map((item: { id: number; title: string}) => (
                <h1 key={item.id}>{item.title}</h1>
            ))
            }
        </>
    )
}