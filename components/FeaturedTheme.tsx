
import Image from "next/image";

export default function FeaturedTheme(props: { imgURL: string; title: string; description: string; }) {
    return (
        <div className="shadow-common cursor-pointer h-full">

            <div className="relative aspect-[545/300]">

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    fill
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />

            </div>

            <div className="p-4">

                <h3 className="text-lg font-bold text-subtitle">
                    {props.title}
                </h3>
                <p className=" text-line">
                    {props.description}
                </p>

            </div>

        </div>
    );
}