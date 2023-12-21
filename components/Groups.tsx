"use client"

export default function Groups(props: { groups: any; }) {

    const scrollToPosition = () => {
        // Assuming you want to scroll 1000 pixels down from the top
        window.scrollTo({
            top: 1000,
            behavior: 'smooth', // for smooth scrolling
        });
    };

    return (
        <div className="flex justify-center my-4">
            {props.groups.map((group: string) => (
                <div
                    key={group}
                    className="text-[#646464] text-base font-bold rounded-full w-[30px] h-[30px] bg-[#DCDCDC] m-[5px] flex items-center justify-center"
                    onClick={scrollToPosition}
                >
                    <p>{group}</p>
                </div>
            ))}
        </div>
    );
}