"use client"

import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import keyboardLayout from "@/lib/keyboard_layout";
import { getDictionaryWord, getWordDetail } from "@/lib/data";

export default function VirtualKeyboard(): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [layoutName, setLayoutName] = useState<string>("default");
    const [selectedValue, setSelectedValue] = useState<string>("gurmukhi");
    const [dictionaryWords, setDictionaryWords] = useState<string[]>(['']);
    const [wordDetail, setWordDetail] = useState<any>();
    const [show, setShow] = useState<boolean>(true);
    const keyboard = useRef<any>();

    const onChange = (input: string) => {
        setShow(true);
        setInput(input);
        console.log("Input changed", input);
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onKeyPress = (button: string) => {
        console.log("Button pressed", button);
        setShow(true);

        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
    };

    const wordClick = async (word: string) => {
        setShow(false);
        setWordDetail(await getWordDetail(selectedValue, word));
        setInput(word);
        keyboard.current.setInput(word);
        console.log(wordDetail);
    }

    const clear = () => {
        setInput('');
        keyboard.current.setInput('');
        setWordDetail('');
        setShow(true);
    }

    useEffect(() => {
            const fetchData = async () => {
                if (input) setDictionaryWords(await getDictionaryWord(selectedValue, input));
                else setDictionaryWords([]);
            };

            fetchData();
    }, [input, selectedValue]);

    return (
        <>
            <div className="max-w-2xl px-4 mx-auto mt-12">
                <div className="relative">
                    <input
                        value={input}
                        placeholder={"ਅਕਾਲ..."}
                        onChange={onChangeInput}
                        className="h-12 pl-8 pr-2 py-2 w-full border border-[#BBBBBB] rounded-full outline-none"
                    />
                    <div className="sm:absolute right-[2px] top-[2px] flex flex-col gap-3 sm:gap-0 mt-3 sm:mt-0 sm:flex-row">
                        <button
                            className={"h-10 sm:h-11 w-full sm:w-auto px-8 text-white text-sm sm:rounded-full outline-none " + (selectedValue === 'english' ? "bg-[#58ABDF]" : "bg-[#0C79BE]")}
                            onClick={() => {
                                setSelectedValue('english');
                                clear();
                            }}
                        >ENGLISH</button>
                        <button
                            className={"h-10 sm:h-11 w-full sm:w-auto px-8 text-white text-sm sm:rounded-full outline-none " + (selectedValue === 'gurmukhi' ? "bg-[#58ABDF]" : "bg-[#0C79BE]")}
                            onClick={() => {
                                setSelectedValue('gurmukhi');
                                clear();
                            }}
                        >GURMUKHI</button>
                    </div>
                </div>
                <div className="flex flex-col my-8">
                    {show ? dictionaryWords.map((word: string) => (
                        <div
                            key={word}
                            className="cursor-pointer hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => { wordClick(word); }}
                        >
                            {word}
                        </div>
                    )) : <></>}
                </div>
                <div className="flex justify-center gap-4 mb-4">
                    <label className="items-center">
                        <input
                            type="radio"
                            className="form-radio"
                            value="gurmukhi"
                            checked={selectedValue === 'gurmukhi'}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setSelectedValue(e.target.value);
                                clear();
                            }}
                        />
                        <span className="ml-2">Gurmukhi</span>
                    </label>
                    <label className="items-center">
                        <input
                            type="radio"
                            className="form-radio"
                            value="english"
                            checked={selectedValue === 'english'}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setSelectedValue(e.target.value);
                                clear();
                            }}
                        />
                        <span className="ml-2">English Pronunciation</span>
                    </label>
                </div>
                <Keyboard
                    keyboardRef={(r: any) => (keyboard.current = r)}
                    layout={selectedValue === 'gurmukhi' ? keyboardLayout.gurmukhi : keyboardLayout.english}
                    layoutName={layoutName}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />


            </div>

            {wordDetail && <div className="max-w-6xl px-4 mx-auto">
                {wordDetail.pun_mahankosh && <div className="my-4">
                    <h3 className="text-[26px] text-primary font-bold py-2">Mahan Kosh Encyclopedia</h3>
                    <div className="text-2xl text-primary">{wordDetail.pun_mahankosh}</div>
                </div>}
                {wordDetail.pun_kosh && <div className="my-4">
                    <h3 className="text-[26px] text-primary font-bold py-2">SGGS Gurmukhi-Gurmukhi Dictionary</h3>
                    <div className="text-2xl text-primary">{wordDetail.pun_kosh}</div>
                </div>}
                {wordDetail.word && <div className="my-4">
                    <h3 className="text-[26px] text-primary font-bold py-2">SGGS Gurmukhi-English Dictionary</h3>
                    <div className="text-2xl text-primary">Gurmukhi Pronunciation:{wordDetail.word}</div>
                </div>}
                {wordDetail.eng_dic_sri && <div className="my-4">
                    <div className="text-2xl text-primary">{wordDetail.eng_dic_sri}</div>
                </div>}
            </div>}
        </>
    );
}