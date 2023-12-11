import Image from "next/image";
import Highlighter from "react-highlight-words";

export default function PodMedia(props: { imgURL: string; title: string; description: string; query: string; }) {
    return (
        <div className="flex">

            <div className="aspect-[325/219]">

                <Image
                    src={props.imgURL}
                    alt="Featuredsample"
                    width={325}
                    height={219}
                    className="max-w-[325px] max-h-[219px] w-[325px] h-[219px] rounded-md"
                />

            </div>

            <div className="flex flex-col px-4">

                <h3 className="text-2xl text-blue-primary">
                    <Highlighter
                        searchWords={["query"]}
                        autoEscape={true}
                        textToHighlight={props.title}
                    />
                </h3>
                <p className=" text-line">
                    {props.description}
                </p>

            </div>

        </div>
    );
}