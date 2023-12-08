import { endpoint } from "@/environments/endpoint"

export async function fetchArchiveData() {
    const res = await fetch(`${endpoint}media/archive-latest`);

    if (!res.ok) {
        throw new Error('Failed to fetch archive data');
    }

    return res.json();
}

export async function fetchPodcastsData() {
    const res = await fetch(`${endpoint}featured-api/podcast-listing`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchPodmediasData(slug: string) {
    const res = await fetch(`${endpoint}media/resource-category-podmedia-new/${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}