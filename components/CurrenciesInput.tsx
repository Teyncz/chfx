import Image from "next/image";
import { ChevronDown } from 'lucide-react';

import { useState, useEffect } from "react";

type Currency = {
    currency: string;
    value: number;
    name: string;
    id: number;
};

type CurrenciesInputProps = {
    currenciesData: Currency[];
    setOutputCurrency: React.Dispatch<React.SetStateAction<string>>;
    outputCurrency: string;
    setOutputCurrencyName: React.Dispatch<React.SetStateAction<string>>;
    outputCurrencyName: string;
};


function CurrenciesInput({ currenciesData, setOutputCurrency, outputCurrency, outputCurrencyName, setOutputCurrencyName }: CurrenciesInputProps) {

    const [isSelectVisible, setSelectVisible] = useState<boolean>(false)
    const selectCurrency: HTMLElement | null = document.getElementById('selectCurrency')
    const selectCurrencyButton: HTMLElement | null = document.getElementById('selectCurrencyButton')

    const handleCurrencyClick = (currencyCode: string, currencyName: string) => {
        setOutputCurrency(currencyCode);
        setOutputCurrencyName(currencyName)
    };

    const selectCurrencyButtonClick = () => {
        setSelectVisible(!isSelectVisible)
    };

    useEffect(() => {
        document.addEventListener('click', (e: MouseEvent) => {
            if (selectCurrency && selectCurrencyButton && !selectCurrency.contains(e.target as Node) && !selectCurrencyButton.contains(e.target as Node)) {
                if (isSelectVisible) {
                    setSelectVisible(false)
                }
            }
        })
    }, [selectCurrency, isSelectVisible, selectCurrencyButton]);

    return (
        <div className="border-1 border-[#CFCFCF] w-ful sm:w-[56.25%] h-[65px] relative rounded-[5px]">
            <div id="selectCurrencyButton" className="h-[65px] flex items-center justify-between w-full cursor-pointer px-[25px]" onClick={() => selectCurrencyButtonClick()}>
                <div className="flex items-center gap-[10px] max-w-[calc(100%-60px)]">
                    <Image src={`/imgs/flag/${outputCurrency}.svg`} alt={`Drapeau ${outputCurrencyName}`} width={25} height={25} className="rounded-full" />
                    <p className="text-[#2B2B2B] text-[24px] font-[500] truncate">{outputCurrency} - {outputCurrencyName}</p>
                </div>
                <ChevronDown id="ChevronDown" className="min-w-fit" style={{
                    transform: isSelectVisible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'
                }} />
            </div>
            <div id="selectCurrency" className={`absolute max-h-[200px] z-999 overflow-y-auto w-full bg-white rounded-[5px] border-1 border-[#CFCFCF] mt-[10px] left-0 ${isSelectVisible ? '' : 'hidden'}`}>
                {currenciesData.map((currency) => (
                    <div
                        key={currency.id}
                        aria-label={currency.name}
                        onClick={() => handleCurrencyClick(currency.currency, currency.name)}
                        className="h-[40px] flex items-center hover:bg-[#ebebeb] px-[25px] cursor-pointer gap-[10px]"
                    >
                        <Image src={`/imgs/flag/${currency.currency}.svg`} alt={`Drapeau ${currency.name}`} width={25} height={25} className="rounded-full" />
                        <p className="truncate">{currency.currency} - {currency.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrenciesInput;
