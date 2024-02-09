'use client'

import { useState } from "react";
import { Ang } from "./Ang";
import { Pagination } from "./Pagination";
import { Scripture } from "./Scripture";
import { SettingButton } from "./SettingButton";
import { Setting } from "./Setting";
import { Print } from "./Print";

export const Sriguru = ({ route, item, shabadData }: { route: string; item: string; shabadData: any; }) => {

    const [settingOpen, setSettingOpen] = useState<boolean>(false);
    const [setting, setSetting] = useState({
        option1: false,
        option2: true,
        option3: true,
        option4: false,
        option5: false,
        option6: true,
        option7: false,
        option8: false,
    });
    const [printOpen, setPrintOpen] = useState<boolean>(false);
    const [print, setPrint] = useState({
        print_opt1: true,
        print_opt2: false,
        print_opt3: true,
        print_opt4: true,
        print_opt5: false,
        print_opt6: false,
        print_opt7: true,
        print_opt8: false,
        print_opt9: false,
        print_opt10: "line",
    });

    return (
        <>
            <div className="flex justify-between">
                <Ang currentPage={route} />
                <SettingButton setSettingOpen={setSettingOpen} setPrintOpen={setPrintOpen} />
            </div>
            <Pagination pages={shabadData.pages} currentRoute={route} currentItem={item} />
            {
                shabadData.data.scriptures.map((scripture: any) => {
                    return (
                        <Scripture key={scripture.id} scripture={scripture} setting={setting} />
                    );
                })
            }
            <Setting settingOpen={settingOpen} setSettingOpen={setSettingOpen} setting={setting} setSetting={setSetting} />
            <Print printOpen={printOpen} setPrintOpen={setPrintOpen} print={print} setPrint={setPrint} />
        </>
    );
}