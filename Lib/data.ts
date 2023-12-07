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

export async function getFeaturedMedia() {
    try {
        const data = await fetchPodcastsData();
        const media_result = data.result.media_result;
        media_result.sort((a: { featured_display_order: number; }, b: { featured_display_order: number; }) => {
            return a.featured_display_order - b.featured_display_order;
        });
        console.log("filtered", media_result.filter((item: { featured: number; }) => item.featured === 1));
        return media_result.filter((item: { featured: number; }) => item.featured === 1);
    } catch (error: any) {
        throw new Error(error);
    }
}