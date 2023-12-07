import { fetchPodcastsData, fetchArchiveData } from "./fetch_data";

export async function getCatResults() {
    try {
        const data = await fetchPodcastsData();
        const cat_result = data.result.cat_result;
        cat_result.sort((a: { featured_display_order: number; }, b: { featured_display_order: number; }) => {
            return a.featured_display_order - b.featured_display_order;
        });
        return cat_result;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getArchives() {
    try {
        const data = await fetchArchiveData();
        const archives = data.result;
        return archives;
    } catch (error: any) {
        throw new Error(error);
    }
}