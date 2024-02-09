
import { date_transform } from "@/utils/date_transform";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({ podcast_index }: { podcast_index: any }) => {
    return (
        <>
            <div className="mb-[15px] w-full h-[80px] sm:h-auto bg-top sm:bg-top bg-cover bg-[url('/images/home/sm_homebanner.png')] sm:bg-[url('/images/home/homebanner.jpg')]">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="pt-[50px] pb-[150px] hidden md:block">
                        <h1 className="text-3xl font-bold text-white">{podcast_index.title}</h1>
                        <p className="text-sm text-white">{date_transform(podcast_index.created_at)}</p>
                        <div className="mt-[21px] flex gap-4 items-center">
                            <button
                                className="text-sm text-white px-6 py-1 rounded-lg border border-line-primary bg-blue-primary hover:bg-blue-secondary transition-all"
                            >
                                English - ਅੰਗਰੇਜ਼ੀ
                            </button>
                            <button
                                className="text-sm text-white px-6 py-1 rounded-lg border border-line-primary bg-primary hover:bg-secondary transition-all"
                            >
                                Punjabi- ਪੰਜਾਬੀ
                            </button>
                            <FontAwesomeIcon icon={faCircleInfo} className="text-line-primary" />
                        </div>
                    </div>
                    <div className="pb-[105px] pt-[80px] md:pt-0 sm:flex flex-col gap-4 items-end hidden">
                        <Link href="">
                            <Image src="/images/home/google_podcast.png" width={155} height={40} alt="google_podcast" className="w-[155px] h-[40px]" />
                        </Link>
                        <Link href="">
                            <Image src="/images/home/apple_podcast.png" width={155} height={40} alt="apple_podcast" className="w-[155px] h-[40px]" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-around md:hidden mt-[5px] mb-[21px] sm:mb-[36px]">
                <div className="flex flex-col items-center">
                    <Link href="" className="text-sm font-bold border-b border-line-secondary text-primary hover:text-blue-primary">{podcast_index.title}</Link>
                    <p className="text-xs font-bold mt-1 text-line-primary">{date_transform(podcast_index.created_at)}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <button
                        className="text-sm text-white px-[10px] py-[5px] rounded-full border border-line-primary bg-blue-primary hover:bg-blue-secondary transition-all"
                    >
                        English
                    </button>
                    <button
                        className="text-sm text-white px-[10px] py-[5px] rounded-full border border-line-primary bg-primary hover:bg-secondary transition-all"
                    >
                        Punjabi
                    </button>
                </div>
            </div>
            <div className="flex justify-center gap-4 sm:hidden mt-[10px] mb-[14px]">
                <Image src="/images/home/google_podcast.png" width={187} height={48} alt="google_podcast" className="w-[187px] h-[48px]" />
                <Image src="/images/home/apple_podcast.png" width={187} height={48} alt="apple_podcast" className="w-[187px] h-[48px]" />
            </div>
        </>
    );
}