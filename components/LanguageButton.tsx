import Image from "next/image";

export default function LanguageButton() {
    return (
        <div className="flex gap-2 justify-between max-w-[350px] md:mt-8">
            <button
                className="text-sm text-white px-2 md:px-6 py-1 md:rounded-lg rounded-full border border-line bg-blue-primary hover:bg-blue-secondary transition-all"
            >
                English<span className="hidden md:inline"> - ਅੰਗਰੇਜ਼ੀ</span>
            </button>
            <button
                className="text-sm text-white px-2 md:px-6 py-1 md:rounded-lg rounded-full border border-line bg-primary hover:bg-third transition-all"
            >
                Punjabi<span className="hidden md:inline"> - ਪੰਜਾਬੀ</span>
            </button>
            <Image
                src="/Images/SVG/info-svgrepo-com.svg"
                alt="iSVG"
                width={16}
                height={16}
                className="hidden cursor-pointer md:block"
            />
        </div>
    );
}