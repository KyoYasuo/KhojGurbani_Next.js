
import { endpoint } from "@/environments/endpoint"
import customFetch from "./custom_fetch";

export async function getPodcasts() {
  try {
    const data = await customFetch(`${endpoint}featured-api/podcast-listing`);
    return data.json();
  } catch (error) {
    console.error(error);
  }
}
