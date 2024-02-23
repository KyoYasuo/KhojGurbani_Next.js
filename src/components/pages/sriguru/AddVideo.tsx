'use client'

export const AddVideo = ({ videoOpen, setVideoOpen }: { videoOpen: boolean; setVideoOpen: any; }) => {

    function handleClose() {
        setVideoOpen(false);
    }

    function handleAdd() {
        console.log("video add");
    }

    return (
        <div className={`relative z-20 ${videoOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>

            <div className="fixed top-[50px] left-1/2 -translate-x-1/2 w-[300px] flex flex-col rounded-md overflow-hidden">
                <h4 className="text-[21px] leading-[1.5] text-white p-[14px] bg-main">Setting</h4>
                <div className="p-[14px] bg-white text-primary flex flex-col">

                </div>
                <div className="flex justify-end items-center bg-white p-[14px] border-t">
                    <button className="px-[10px] py-[5px] hover:bg-slate-200 text-sm rounded-sm transition-all"
                        onClick={handleClose}>
                        Close
                    </button>
                    <button className="px-[10px] py-[5px] ml-[18px] bg-blue-primary hover:bg-blue-secondary text-sm text-white rounded-sm transition-all"
                        onClick={handleAdd}>
                        Add
                    </button>

                </div>
            </div>
        </div>
    )
}