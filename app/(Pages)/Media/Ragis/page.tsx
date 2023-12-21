import MediaTable from "@/components/MedaiTable";
import { getAllRagis, getRagiMedias } from "@/lib/data";
import Link from "next/link";

export default async function RagisPage() {

    const allRagis = await getAllRagis();
    const groups = Object.keys(allRagis);
    console.log(groups);

    

    return (
        <>
            <div className="w-full bg-bottom bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Ragi Directory</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                
                {groups.map((group: string) => (
                    <div key={group} className="flex flex-col mb-8 shadow-common">
                        <div className="relative h-8 mb-2">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="28px" height="28px" viewBox="0 0 173.000000 170.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className="w-8 h-8 mx-auto"
                            >
                                <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)"
                                    fill="#6B6B6B" stroke="none">
                                    <path
                                        d="M150 1067 l0 -632 347 -200 c191 -110 352 -200 358 -200 6 0 167 90 358 199 l347 200 0 633 0 633 -705 0 -705 0 0 -633z" />
                                </g>
                            </svg>
                            <span className="absolute w-full top-[2px] text-center text-sm text-white font-normal">{group}</span>
                        </div>
                        <div className="grid grid-cols-6 gap-[14px] px-6">
                            {allRagis[group].map((item: { id: number; name: string; description: string; attachment_name: string; }) => (
                                <div key={item.id} className="">
                                    <img className="" src={item.attachment_name} />
                                    <div className="text-[#424242] text-sm my-3">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}