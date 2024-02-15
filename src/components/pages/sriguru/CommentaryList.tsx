import { Tinos } from "next/font/google";

const tinos = Tinos({
    weight: "400",
    subsets: ["latin"],
    display: 'swap',
});

export const CommentaryList = ({ commentaryList }: { commentaryList: any }) => {
    if (commentaryList) {
        return (
            <>
                <h3 className="text-[26px] text-[#252636] font-bold">Commentary</h3>
                <div className="py-[23px] px-[15px] shadow-common">
                    <div
                        dangerouslySetInnerHTML={{ __html: commentaryList.result[0].commentary }}
                        className={`${tinos.className} antialiased text-[20px] h-[260px] overflow-hidden [&_p]:text-[#5C5B5B] [&_p]:mb-[14px] mb-[14px]`}
                    />
                    <div className="flex justify-end">
                        <button className="cursor-pointer flex bg-blue-primary items-center text-white px-[20px] py-[5px] text-[12px] gap-2 rounded group">
                            Read more
                        </button>
                    </div>
                </div>
            </>
        )
    }
}