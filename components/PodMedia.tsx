import Image from "next/image";

export default function PodMedia(props: { imgURL: string; title: string; description: string; }) {
    return (
        <div className="flex">

            <div className="aspect-[325/219]">

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    width={325}
                    height={219}
                />

            </div>

            <div className="flex flex-col p-4">

                <h3 className="text-lg font-bold text-blue-primary">
                    {props.title}
                </h3>
                <p className=" text-line">
                    {props.description}
                </p>

            </div>

        </div>
    );
}