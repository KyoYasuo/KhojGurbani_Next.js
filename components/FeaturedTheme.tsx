
import Image from "next/image";

export default function FeaturedTheme(props: { imgURL: string; title: string; description: string; }) {
    return (
        <div className="shadow-common cursor-pointer h-full">

            <div className="w-full">

                {/* <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    width={545}
                    height={300}
                    className="w-full max-h-[300px]"
                /> */}

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