import Ang from "@/components/Ang";
import SriGuru from "@/components/SriGuru";
import { getCommentaryList, getShabad, getShabadMedia, getShabadPages } from "@/lib/data";
import { redirect } from "next/navigation";

export default async function SriGuruSubPage({ params: { slug } }: { params: { slug: string[] } }) {

    const route = slug[0];
    const item = slug[1];

    if (!item) {
        const shabadPages = await getShabadPages(route);
        redirect(`/SriGuruGranthSahib/${route}/${shabadPages[0]}`);
    }

    const shabadData = await getShabad(`${route}/${item}`);
    const pages = await getShabadPages(`${route}/${item}`);
    const commentaryList = await getCommentaryList(item);
    const shabadMedia = await getShabadMedia(item);

    return (
        <div className="mx-auto max-w-6xl px-4 flex flex-col">
            <SriGuru route={route} item={item} shabadData={shabadData} pages={pages} commentaryList={commentaryList} shabadMedia={shabadMedia} />
        </div>
    );
}