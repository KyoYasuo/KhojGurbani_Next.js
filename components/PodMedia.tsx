import Image from "next/image";

export default function PodMedia(props: { imgURL: string; title: string; description: string; }) {
    return (
        <div className="flex">

            <div className="relative aspect-[325/219]">

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    fill
                    sizes="max-width: 325px, max-height: 219px"
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />

            </div>

            <div className="flex flex-col px-4">

                <h3 className="text-2xl text-blue-primary">
                    {props.title}
                </h3>
                <p className=" text-line">
                    {props.description}
                </p>

            </div>

        </div>
    );
}