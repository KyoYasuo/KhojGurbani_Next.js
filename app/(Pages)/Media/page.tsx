import SlideCategory from "@/components/SlideCategory";
import SlideRadio from "@/components/SlideRadio";
import SlideRagi from "@/components/SlideRagi";
import { getFeaturedCategories, getFeaturedRagis, getRadios } from "@/lib/data";

export default async function Page() {

    const featuredCategories = await getFeaturedCategories();
    const radios = await getRadios();
    const featuredRagis = await getFeaturedRagis();

    return (
        <>
            <div className="max-w-6xl px-4 mx-auto">
                <div>
                    <h2 className="text-[26px] font-bold">Live Kirtan Radio</h2>
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
            </div>
        </>
    )
}