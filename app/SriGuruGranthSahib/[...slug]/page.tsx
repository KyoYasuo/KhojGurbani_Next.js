import Ang from "@/components/Ang";
import SriGuru from "@/components/SriGuru";
import { getShabadPages } from "@/lib/data";
import { redirect } from "next/navigation";

export default async function SriGuruSubPage({ params: { slug } }: { params: { slug: string[] } }) {

    const route = slug[0];
    const item = slug[1];

    if (!slug[1]) {
        const shabadPages = await getShabadPages(slug[0]);
        redirect(`/SriGuruGranthSahib/${slug[0]}/${shabadPages[0]}`);
    }

    return (
        <div className="mx-auto max-w-6xl px-4 flex flex-col">
            <Ang currentPage={slug[0]} />
            <SriGuru route={route} item={item} />
        </div>
    );
}