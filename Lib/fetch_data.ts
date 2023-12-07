import { endpoint } from "@/environments/endpoint"

export async function getArchive() {
    const res = await fetch(`${endpoint}media/archive-latest`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

export async function getPodcasts() {
    const res = await fetch(`${endpoint}featured-api/podcast-listing`);

    if (!res.ok) {
        toastr.error('Failed to fetch data');
        throw new Error('Failed to fetch data');
    }

    return res.json()
}