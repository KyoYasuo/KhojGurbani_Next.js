import SearchMedia from "@/components/SearchMedia";
import SlideCategory from "@/components/SlideCategory";
import SlideRadio from "@/components/SlideRadio";
import SlideRagi from "@/components/SlideRagi";
import SlideRecent from "@/components/SlideRecent";
import SlideTrack from "@/components/SlideTrack";
import { getFeaturedCategories, getFeaturedTracks, getFeaturedRagis, getRadios, getAllRagis } from "@/lib/data";
import Link from "next/link";

export default async function MediaPage() {

    const featuredCategories = await getFeaturedCategories();
    const radios = await getRadios();
    const featuredRagis = await getFeaturedRagis();
    const featuredTracks = await getFeaturedTracks();
    const allRagis = await getAllRagis();

    return (
        <>
            <div className="w-full bg-top bg-cover bg-[url('/Images/Media/top.png')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Media</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <SearchMedia allRagis={allRagis} />
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px]">Recently played</h2>
                    <div className="block sm:hidden">
                        <SlideRecent showCount={1} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRecent showCount={2} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRecent showCount={3} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px]">Featured Tracks</h2>
                    <div className="block sm:hidden">
                        <SlideTrack showCount={1} featuredTracks={featuredTracks} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideTrack showCount={2} featuredTracks={featuredTracks} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideTrack showCount={3} featuredTracks={featuredTracks} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px]">Featured Categories</h2>
                    <div className="block sm:hidden">
                        <SlideCategory showCount={1} featuredCategories={featuredCategories} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideCategory showCount={2} featuredCategories={featuredCategories} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideCategory showCount={3} featuredCategories={featuredCategories} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px]">Live Kirtan Radio</h2>
                    <div className="block sm:hidden">
                        <SlideRadio showCount={1} radios={radios} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRadio showCount={2} radios={radios} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRadio showCount={3} radios={radios} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px]">Featured Ragi</h2>
                    <div className="block sm:hidden">
                        <SlideRagi showCount={1} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRagi showCount={2} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <SlideRagi showCount={4} featuredRagis={featuredRagis} />
                    </div>
                    <div className="hidden xl:block">
                        <SlideRagi showCount={6} featuredRagis={featuredRagis} />
                    </div>
                </div>
                <div className="flex justify-center m-10">
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