import { getPodmedias } from "@/lib/data";

interface HomeSubPageProps {
  params: {
    slug: string;
  };
}

export default async function HomeSubPage({ params: { slug } }: HomeSubPageProps) {
  const pod_medias = await getPodmedias(slug);
  return (
    <>
      {pod_medias.map((item: { id: number; title: string }) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
}