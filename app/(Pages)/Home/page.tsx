import { getCatResult } from "@/Lib/data"

export default async function Page() {
    const data = await getCatResult();

    return (
        <h1>GubaniSearch</h1>
    )
}