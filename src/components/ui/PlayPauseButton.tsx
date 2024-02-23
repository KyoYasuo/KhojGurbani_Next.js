import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx";

export const PlayPauseButton = ({ onClick, isPlaying, isSelected, size }: { onClick: () => void; isPlaying: boolean; isSelected: boolean; size: number; }) => {
    if (size === 1) {
        return (
            <button
                onClick={onClick}
                className={clsx(isSelected ? "bg-blue-primary hover:bg-blue-secondary" : "bg-grey-primary hover:bg-grey-secondary",
                    "w-6 h-6 rounded-full relative")}>
                {
                    isPlaying ?
                        <FontAwesomeIcon icon={faPause} className={clsx(isSelected ? "text-white" : "text-blue-primary",
                            "text-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all")} />
                        :
                        <FontAwesomeIcon icon={faPlay} className={clsx(isSelected ? "text-white" : "text-blue-primary",
                            "text-sm absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-50%] transition-all")} />
                }
            </button>
        )
    }
}