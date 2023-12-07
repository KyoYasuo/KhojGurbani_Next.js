import { endpoint } from "@/environments/endpoint"

async function getArchive() {
    const res = await fetch(`${endpoint}media/archive-latest`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}