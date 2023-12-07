import { getPodcasts } from "./fetch_data";
import toastr from "toastr";

export interface CatResults {
    id: number;
    title: string;
    category_image: string;
    featured: number;
    featured_display_order: number;
    podcast_subcats: [];
}

export async function getCatResult(): Promise<CatResults> {
    try {
        const data = await getPodcasts();
        console.log(data.result.cat_result);
        return data.result.cat_result;
    } catch (error: any) {
        // toastr.error(error);
        throw new Error(error);
    }
}