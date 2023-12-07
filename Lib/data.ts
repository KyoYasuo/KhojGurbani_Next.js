import { getPodcasts } from "./fetch_data";

export async function getCatResult(){
    try {
        const data = await getPodcasts();
        const cat_result = data.result.cat_result;
        cat_result.sort((a: { featured_display_order: number; }, b: { featured_display_order: number; }) => {
            return a.featured_display_order - b.featured_display_order;
        });
        console.log(cat_result);
        return cat_result;
    } catch (error: any) {
        // toastr.error(error);
        throw new Error(error);
    }
}