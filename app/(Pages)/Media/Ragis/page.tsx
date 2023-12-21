import Groups from "@/components/Groups";
import MediaTable from "@/components/MedaiTable";
import { getAllRagis, getRagiMedias } from "@/lib/data";
import Link from "next/link";

export default async function RagisPage() {

    const allRagis = await getAllRagis();
    

    

    return (
        <>
            <div className="w-full bg-bottom bg-cover bg-[url('/Images/Media/ragis.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Ragi Directory</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <Groups allRagis={allRagis} />
            </div>
        </>
    );
}