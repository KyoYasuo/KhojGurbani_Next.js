import VirtualKeyboard from "@/components/VirtualKeyboard";

export default function DictionaryPage() {
    return (
        <div>
            <div className="w-full h-24 sm:h-36 md:h-48 lg:h-64 bg-top bg-cover bg-[url('/Images/Dictionary/top.jpg')]">
                <h1 className="mx-auto max-w-6xl p-4 pt-8 sm:pt-16 md:pt-20 lg:pt-24 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Encyclopedia & Dictionaries</h1>
            </div>
            <VirtualKeyboard />
        </div>
    )
}