import Image from "next/image";

export default function LanguageButton() {
    return (
        <div className="flex justify-between max-w-[350px] mt-8">
            <button
                className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
            >
                English - ਅੰਗਰੇਜ਼ੀ
            </button>
            <button
                className="text-sm text-white px-6 py-1 rounded-lg border border-line bg-primary hover:bg-third transition-all"
            >
                Punjabi - ਪੰਜਾਬੀ
            </button>
            <Image
                src="/Images/SVG/info-svgrepo-com.svg"
                alt="iSVG"
                width={16}
                height={16}
                className=" cursor-pointer"
            />
        </div>
    );
}