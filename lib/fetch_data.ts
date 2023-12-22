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

export async function fetchDictionaryWords(language: string, value: string) {
    const res = await fetch(`${endpoint}get-dictionary-words?lang=${language}&value=${value}`);
    console.log("fetch: ", `${endpoint}get-dictionary-words?lang=${language}&value=${value}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchWordDetail(language: string, value: string) {
    const res = await fetch(`${endpoint}get-dictionary-word-detail?lang=${language}&value=${value}`);
    console.log("fetch: ", `${endpoint}get-dictionary-word-detail?lang=${language}&value=${value}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchFeaturedRagis() {
    const res = await fetch(`${endpoint}media-authors/featured`);
    console.log("fetch: ", `${endpoint}media-authors/featured`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchRagiMedias(ragi: string) {
    const res = await fetch(`${endpoint}media/featured-artist-gurbani/${ragi}`);
    console.log("fetch: ", `${endpoint}media/featured-artist-gurbani/${ragi}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchRadios() {
    const res = await fetch(`${endpoint}radio`);
    console.log("fetch: ", `${endpoint}radio`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchFeaturedCategories() {
    const res = await fetch(`${endpoint}categories/featured`);
    console.log("fetch: ", `${endpoint}categories/featured`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchFeaturedTracks() {
    const res = await fetch(`${endpoint}media/featured?type=AUDIO`);
    console.log("fetch: ", `${endpoint}media/featured?type=AUDIO`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchRecents() {
    const res = await fetch(`${endpoint}media/recently-played?machine_id=a230fd3d-266c-4874-9278-db460b91dc13&user_id=`);
    console.log("fetch: ", `${endpoint}media/recently-played?machine_id=a230fd3d-266c-4874-9278-db460b91dc13&user_id=`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchAllRagis() {
    const res = await fetch(`${endpoint}media-authors/alphabet-list`);
    console.log("fetch: ", `${endpoint}media-authors/alphabet-list`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchMediaCategories(category: string) {
    const res = await fetch(`${endpoint}categories/sub-categories/${category}`);
    console.log("fetch: ", `${endpoint}categories/sub-categories/${category}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchSubCategoryMedias(subCategory: string) {
    const res = await fetch(`${endpoint}media/resource-subcategory-media-new/${subCategory}`);
    console.log("fetch: ", `${endpoint}media/resource-subcategory-media-new/${subCategory}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function fetchCategoryMedias(category: string) {
    const res = await fetch(`${endpoint}media/resource-category-media-new/${category}`);
    console.log("fetch: ", `${endpoint}media/resource-category-media-new/${category}`);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

    return res.json();
}

export async function postTrack(params: any) {
    const res = await fetch(`${endpoint}media/play`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    });
    console.log("post: ", `${endpoint}media/play`);
    console.log(params);

    if (!res.ok) {
        throw new Error('Failed to fetch podcast data');
    }

}