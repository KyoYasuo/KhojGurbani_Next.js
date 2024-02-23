import { Sriguru } from "@/components/pages/sriguru/Sriguru";
import { getData } from "@/utils/fetch";
import { redirect } from "next/navigation";

export default async function SriGuruSubPage({ params: { slug } }: { params: { slug: string[] } }) {

    const route = slug[0];
    const item = slug[1];

    if (!item) {
        const data = await getData(`/shabad/${route}`);
        const shabadPages = data.pages;
        redirect(`/sriguru/${route}/${shabadPages[0]}`);
    }

    const shabadData = await getData(`/shabad/${route}/${item}`);
    const commentaryList = await getData(`/commentary/list/${item}`);
    const mediaData = await getData(`/shabad-data/get-shabad-media/${item}`);

    return (
        <div className="max-w-6xl px-4 mx-auto">
            <Sriguru route={route} item={item} shabadData={shabadData} commentaryList={commentaryList} mediaData={mediaData} />
        </div>
    );
}