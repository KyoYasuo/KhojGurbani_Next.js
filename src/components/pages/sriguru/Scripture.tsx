export const Scripture = ({ scripture, setting }: { scripture: any; setting: any; }) => {

    return (
        <div
            className="mt-4"
        >
            <h3 className="text-[32px] leading-[1.5] text-[#000000]">
                {scripture.Scripture}
            </h3>
            {setting.option1 ?
                <p className="text-[22px] leading-[1.3] text-[#212529]">
                    {scripture.ScriptureOriginal}
                </p>
                :
                <></>
            }
            {setting.option2 ?
                <p className="text-[22px] leading-[1.3] text-[#212529]">
                    {scripture.ScriptureRoman}
                </p> 
                :
                <></>
            }
            {scripture.translation.KhojgurbaaniEnglish && setting.option3 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">KG</div>
                    <div className="text-[20px] text-[#212529]">{scripture.translation.KhojgurbaaniEnglish}</div>
                </div>
                :
                <></>
            }
            {scripture.translation.ManmohanSinghEnglish && setting.option4 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">MS</div>
                    <div className="text-[20px] text-[#212529]">{scripture.translation.ManmohanSinghEnglish}</div>
                </div>
                :
                <></>
            }
            {scripture.translation.SantSinghKhalsaEnglish && setting.option5 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">SK</div>
                    <div className="text-[20px] text-[#212529]">{scripture.translation.SantSinghKhalsaEnglish}</div>
                </div>
                :
                <></>
            }
            {scripture.translation.HarbansSinghPunjabi && setting.option6 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">HS</div>
                    <div className="text-[22px] text-[#212529]">{scripture.translation.HarbansSinghPunjabi}</div>
                </div>
                :
                <></>
            }
            {scripture.translation.ManmohanSinghPunjabi && setting.option7 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">MS</div>
                    <div className="text-[22px] text-[#212529]">{scripture.translation.ManmohanSinghPunjabi}</div>
                </div>
                :
                <></>
            }
            {scripture.translation.SahibSinghPunjabi && setting.option8 ?
                <div className="flex gap-2 leading-[1.7]">
                    <div className="text-[20px] font-bold text-blue-primary">SS</div>
                    <div className="text-[22px] text-[#212529]">{scripture.translation.SahibSinghPunjabi}</div>
                </div>
                :
                <></>
            }
        </div>
    )
}