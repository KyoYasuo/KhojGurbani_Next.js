import { endpoint } from "@/environments/endpoint"

export async function getArchives() {
    const res = await fetch(`${endpoint}media/archive-latest`);

    if (!res.ok) {
        // toastr.error('Failed to fetch archive data');
        throw new Error('Failed to fetch archive data');
    }

    return res.json();
}

export async function getPodcasts() {
    const res = await fetch(`${endpoint}featured-api/podcast-listing`);

    if (!res.ok) {
        // toastr.error('Failed to fetch podcast data');
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}