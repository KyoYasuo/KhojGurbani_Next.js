import { getArchives, getCatResults, getFeaturedMedia, getTodayPodcast } from "@/lib/data"
import FeaturedTheme from "@/app/components/FeaturedTheme";
import HomeBanner from "@/app/components/HomeBanner";
import HomeWelcome from "@/app/components/HomeWelcome";
import SlideShow from "@/app/components/SlideShow";
import Link from "next/link";
import Search from "@/app/components/Search";

export default async function HomePage() {
    const cat_results = await getCatResults();
    const archives = await getArchives();
    const featuredMedias = await getFeaturedMedia();
    const todayPodcast = await getTodayPodcast();

    return (
        <div className="">
            <HomeBanner recent={todayPodcast} />
            <div className="mx-auto max-w-6xl p-4">
                <HomeWelcome />
                <div className="my-6 flex justify-between">
                    <h2 className="text-3xl font-bold text-title">Featured Themes</h2>
                    
                </div>
                <div className="grid grid-cols-2 gap-y-4">
                    {cat_results.map((item: { id: number; category_image: string; title: string; description: string; }) => (
                        <Link key={item.id} href={`/Home/${item.id}`}>
                            <FeaturedTheme
                                imgURL={item.category_image}
                                title={item.title}
                                description={item.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full p-[60px] bg-right-top bg-cover bg-[url('/Images/Home/homebottom.png')]">
                <div className="mx-auto max-w-6xl p-4">
                    <h2 className="text-3xl py-4 font-bold text-white">
                        Featured Podcasts
                    </h2>
                    <SlideShow showCount={3} featuredMedias={featuredMedias} archives={undefined}
                    />
                </div>
            </div>
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl py-4 font-bold text-title">Archive</h2>
                    <a className=" cursor-pointer text-blue-primary font-bold text-sm">
                        View all Podcasts
                    </a>
                </div>
                <SlideShow showCount={4} archives={archives} featuredMedias={undefined} />
            </div>
            <div className="w-full bg-right-top bg-cover bg-[url('/Images/Home/homesub.jpg')]">
                <div className="mx-auto max-w-6xl p-4">
                    <h2 className="text-3xl py-4 font-bold text-title text-center">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h2>
                    <form className="relative mx-auto max-w-3xl h-16 bg-white rounded-[50px] border-[1px] border-[#929292]">
                        <input
                            id="search_val"
                            name="searchval"
                            placeholder="Enter Email Address"
                            type="email"
                            className="absolute text-xl border-none left-10 top-4 w-3/5 outline-none"
                        />
                        <span>
                            <button className="absolute bg-primary rounded-[50px] text-white text-center h-14 w-40 right-[3px] top-[3px] line-clamp-2 px-6 pt-1">
                                SUBSCRIBE NOW
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}