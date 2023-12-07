import { endpoint } from "@/environments/endpoint"
import customFetch from "./custom_fetch";

export async function getArchives() {
  try {
    const data = await customFetch(`${endpoint}media/archive-latest`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
