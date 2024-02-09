import { faGear, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SettingButton = ({ setSettingOpen, setPrintOpen }: { setSettingOpen: any; setPrintOpen: any; }) => {

    return (
        <div className="flex items-center gap-6">
            <div className="cursor-pointer flex items-center gap-2" onClick={() => setSettingOpen(true)}>
                <div className="underline text-[20px] text-primary">Click for Translation Authors</div>
                <FontAwesomeIcon icon={faGear} className="text-blue-primary text-[18px]" />
            </div>
            <FontAwesomeIcon icon={faPrint} className="cursor-pointer text-primary text-[21px]" onClick={() => setPrintOpen(true)} />
        </div>
    )
}