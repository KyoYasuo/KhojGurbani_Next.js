import { endpoint } from "@/environments/endpoint"

export async function fetchTodayPodcastData() {
    const res = await fetch(`${endpoint}media/podcast-index`);
    console.log("fetch: ", `${endpoint}media/podcast-index`);

    if (!res.ok) {
        throw new Error('Failed to fetch archive data');
    }

    return res.json();
}

export async function fetchArchiveData() {
    const res = await fetch(`${endpoint}media/archive-latest`);
    console.log("fetch: ", `${endpoint}media/archive-latest`);

    if (!res.ok) {
        throw new Error('Failed to fetch archive data');
    }

    return res.json();
}

export async function fetchPodcastsData() {
    const res = await fetch(`${endpoint}featured-api/podcast-listing`);
    console.log("fetch: ", `${endpoint}featured-api/podcast-listing`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchPodmediasData(slug: string) {
    const res = await fetch(`${endpoint}media/resource-category-podmedia-new/${slug}`);
    console.log("fetch: ", `${endpoint}media/resource-category-podmedia-new/${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchSearchData(query: string) {
    const res = await fetch(`${endpoint}media/podcast-list?search=${query}`, { cache: 'no-store' });
    console.log("fetch: ", `${endpoint}media/podcast-list?search=${query}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchAllArchiveData(page: string) {
    const res = await fetch(`${endpoint}media/get-archive-all?page=${page}`);
    console.log("fetch: ", `${endpoint}media/get-archive-all?page=${page}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}