import SlideCategory from "@/components/SlideCategory";
import SlideRadio from "@/components/SlideRadio";
import SlideRagi from "@/components/SlideRagi";
import SlideRecent from "@/components/SlideRecent";
import SlideTrack from "@/components/SlideTrack";
import { getFeaturedCategories, getFeaturedTracks, getFeaturedRagis, getRadios, getRecents } from "@/lib/data";
import Link from "next/link";

export default async function MediaPage() {

    const featuredCategories = await getFeaturedCategories();
    const radios = await getRadios();
    const featuredRagis = await getFeaturedRagis();
    const featuredTracks = await getFeaturedTracks();
    const recents = await getRecents();

    return (
        <>
            <div className="max-w-6xl px-4 mx-auto">
                <div>
                    <h2 className="text-[26px] font-bold">Featured Tracks</h2>
                    <div className="sm:hidden">
                        <SlideRecent showCount={1} recents={recents} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <SlideRecent showCount={2} recents={recents} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRecent showCount={3} recents={recents} />
                    </div>
                </div>
                <div>
                    <h2 className="text-[26px] font-bold">Featured Tracks</h2>
                    <div className="sm:hidden">
                        <SlideTrack showCount={1} featuredTracks={featuredTracks} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <SlideTrack showCount={2} featuredTracks={featuredTracks} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideTrack showCount={3} featuredTracks={featuredTracks} />
                    </div>
                </div>
                <div>
                    <h2 className="text-[26px] font-bold">Featured Categories</h2>
                    <div className="sm:hidden">
                        <SlideCategory showCount={1} featuredCategories={featuredCategories} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <SlideCategory showCount={2} featuredCategories={featuredCategories} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideCategory showCount={3} featuredCategories={featuredCategories} />
                    </div>
                </div>
                <div>
                    <h2 className="text-[26px] font-bold">Live Kirtan Radio</h2>
                    <div className="sm:hidden">
                        <SlideRadio showCount={1} radios={radios} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <SlideRadio showCount={2} radios={radios} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRadio showCount={3} radios={radios} />
                    </div>
                </div>
                <div>
                    <h2 className="text-[26px] font-bold">Featured Ragi</h2>
                    <div className="sm:hidden">
                        <SlideRagi showCount={1} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <SlideRagi showCount={2} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <SlideRagi showCount={4} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden xl:block">
                        <SlideRagi showCount={6} featuredRagis={featuredRagis} />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <Link
                        href="/Media/Ragis"
                        className='mx-auto text-white text-sm bg-blue-primary px-[20px] py-[5px] border border-white rounded-full gap-1'
                    >
                        View All Ragis
                    </Link>
                </div>
            </div>
        </>
    )
}