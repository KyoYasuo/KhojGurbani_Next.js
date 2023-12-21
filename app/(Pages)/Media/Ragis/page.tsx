import MediaTable from "@/components/MedaiTable";
import { getAllRagis, getRagiMedias } from "@/lib/data";
import Link from "next/link";

export default async function RagisPage() {

    const allRagis = await getAllRagis();

    return (
        <>
            <div className="grid grid-cols-6">
                {allRagis.map((item: { id: number; name: string; description: string; attachment_name: string; }) => (
                    <div key={item.id} className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1">
                        <img className="" src={item.attachment_name} />
                    </div>
                ))}

            </div>
        </>
    );
}