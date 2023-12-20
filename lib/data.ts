import { fetchPodcastsData, fetchArchiveData, fetchPodmediasData, fetchTodayPodcastData, fetchSearchData, fetchAllArchiveData, fetchDictionaryWords, fetchWordDetail, fetchFeaturedRagis, fetchRagiMedias, fetchRadios, fetchFeaturedCategories } from "./fetch_data";

export async function getTodayPodcast() {
    try {
        const data = await fetchTodayPodcastData();
        const todayPocast = data.result;
        return todayPocast[0];
    } catch (error: any) {
        throw new Error(error);
    }
}

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
        const featuredMedia = data.result.media_result.filter((item: { featured: number; }) => item.featured === 1);
        featuredMedia.sort((a: { featured_display_order: number; }, b: { featured_display_order: number; }) => {
            return a.featured_display_order - b.featured_display_order;
        });
        return featuredMedia;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getPodmedias(slug: string) {
    try {
        const data = await fetchPodmediasData(slug);
        const archives = data.result;
        return archives;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getSlugs() {
    try {
        const data = await fetchPodcastsData();
        const cat_result = data.result.cat_result;
        return cat_result.map((item: { id: number; }) => `${item.id}`);
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getSlugInfo(slug: string) {
    try {
        const data = await fetchPodcastsData();
        const slugInfo = data.result.cat_result.find((item: { id: number; }) => item.id === parseInt(slug));
        return slugInfo;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getSearchResult(query: string) {
    try {
        const data = await fetchSearchData(query);
        const searchData = data.result;
        return searchData;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getArchivePageCount(page: string) {
    try {
        const data = await fetchAllArchiveData(page);
        const archiveAllData = data.result.last_page;
        return archiveAllData;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getAllArchiveResult(page: string) {
    try {
        const data = await fetchAllArchiveData(page);
        const archiveAllData = data.result.data;
        return archiveAllData;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getDictionaryWord(language: string, value: string) {
    try {
        const data = await fetchDictionaryWords(language, value);
        const dictionarydata = data.data;
        return dictionarydata;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getWordDetail(language: string, value: string) {
    try {
        const data = await fetchWordDetail(language, value);
        const wordDetail = data.data;
        return wordDetail;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getFeaturedRagis() {
    try {
        const data = await fetchFeaturedRagis();
        const featuredRagis = data.result;
        return featuredRagis;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getRagiMedias(ragi: string) {
    try {
        const data = await fetchRagiMedias(ragi);
        const ragiMedias = data.result;
        return ragiMedias;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getRadios() {
    try {
        const data = await fetchRadios();
        const radios = data.data;
        return radios;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getFeaturedCategories() {
    try {
        const data = await fetchFeaturedCategories();
        const featuredCategories = data.featured_categories;
        return featuredCategories;
    } catch (error: any) {
        throw new Error(error);
    }
}


export function dateTransform(value: string): string {
    const dd: string = value?.substr(8, 2);
    const MM: string = value?.substr(5, 2);
    const yyyy: string = value?.substr(0, 4);
    const months: { [key: string]: string } = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    };
    const date: string = `${months[MM]} ${dd}, ${yyyy}`;
    return date;
}