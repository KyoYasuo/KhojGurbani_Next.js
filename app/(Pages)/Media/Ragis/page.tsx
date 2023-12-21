import MediaTable from "@/components/MedaiTable";
import { getAllRagis, getRagiMedias } from "@/lib/data";
import Link from "next/link";

export default async function RagisPage() {

    const allRagis = await getAllRagis();

    return (
        <>
            <div className="max-w-6xl px-4 mx-auto grid grid-cols-6 gap-[14px]">
                {allRagis.map((item: { id: number; name: string; description: string; attachment_name: string; }) => (
                    <div key={item.id} className="">
                        <img className="" src={item.attachment_name} />
                    </div>
                ))}

            </div>
        </>
    );
}