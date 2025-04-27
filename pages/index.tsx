import { useEffect, useState } from "react"
import axios from "axios";
import CurrenciesInput from "../components/CurrenciesInput";
import { CurrenciesTicksChart } from "../components/CurrenciesTicksChart";
import Image from "next/image";
import { Info } from 'lucide-react';


type Currency = {
  id: number;
  currency: string;
  name: string;
  value: number;
};

type CurrencyTick = {
  id: number;
  close: number;
  date: string;
};

export default function Home() {

  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [sumToConverte, setSumToConverte] = useState<number | string>(100.00);
  const [outputCurrency, setOutputCurrency] = useState<string>('EUR');
  const [outputCurrencyName, setOutputCurrencyName] = useState<string>('Euro');
  const [outputCurrencyValue, setOutputCurrencyValue] = useState<number>(0.00);
  const [convertedSum, setConvertedSum] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | undefined>()
  const [currenciesTicks, setCurrenciesTicks] = useState<Record<string, CurrencyTick[]>>({})
  const [currenciesWantedTicks, setCurrenciesWantedTicks] = useState<CurrencyTick[]>([]);

  useEffect(() => {

    async function fetchCurrencies() {
      try {
        const response = await axios.post('/api/getCurrencies', {});
        setCurrencies(response.data.data);
        setLastUpdate(response.data.last_update.date)
        setCurrenciesTicks(response.data.ticks);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (currencies.length > 0 && outputCurrency) {
      setOutputCurrencyValue(Number((currencies.find((currency) => currency.currency === outputCurrency))?.value || 0))
      setConvertedSum(Number(Number(sumToConverte) / outputCurrencyValue))
      setCurrenciesWantedTicks(currenciesTicks[outputCurrency]);
    }
  }, [currencies, outputCurrency, sumToConverte, outputCurrencyValue, currenciesWantedTicks, currenciesTicks]);


  return (
    <main className="h-full px-[15px] pb-[100px]">
      <div className="flex gap-[10px] w-fit mx-auto mt-[40px]">
        <Image className="" src="imgs/Logo.svg" width={30} height={30} alt="logo" />
        <h1 className="text-[26px] font-[700] text-white">CHFX</h1>
      </div>
      <div className="red-bg w-full h-[500px] sm:h-[580px] absolute z-[-999] top-0 left-1/2 transform -translate-x-1/2">
      </div>
      <div className="w-full h-[200px] absolute whiteCircle z-[-999] top-[400px] sm:top-[480px] left-1/2 transform -translate-x-1/2 overflow-x-hidden" />
      <Image className="absolute block z-[-998] top-[120px] sm:top-[100px] mix-blend-color-burn left-1/2 transform -translate-x-1/2 opacity-65" src="imgs/mountain.svg" width={831} height={556} alt="mountain" />
      <section className="flex flex-col items-center mt-[20px] sm:mt-[150px]">
        <h1 className="text-[#FFFFFF] text-[25px] text-center sm:text-[40px] font-[600]">Convertisseur de franc suisse</h1>
        <h2 className="text-[#E6E6E6] text-[16px] text-center sm:text-[24px] font-[400]">Un outil simple pour tous vos voyage en suisse</h2>
      </section>
      <section className="flex justify-start flex-col gap-[20px] bg-white z-999 max-w-[800px] w-full h-full mx-auto rounded-[15px] mt-[75px] box-shadow pt-[45px] pb-[25px]">
        <div className="flex gap-[10px] justify-center max-w-[calc(100%-50px)] sm:max-w-[calc(100%-90px)] w-full mx-auto flex-col sm:flex-row">
          <input
            type="number"
            value={sumToConverte}
            onChange={(event) => { setSumToConverte(event.target.value === '' ? '' : Number(event.target.value)); }}
            className="border-1 border-[#CFCFCF] min-w-[175px] w-[43,75%] h-[65px] rounded-[5px] px-[25px] text-[24px] text-[#2B2B2B] font-[500] z-999 bg-white"
          />
          {currencies.length > 0 && (
            <CurrenciesInput currenciesData={currencies} setOutputCurrency={setOutputCurrency} outputCurrency={outputCurrency} outputCurrencyName={outputCurrencyName} setOutputCurrencyName={setOutputCurrencyName} />
          )}
        </div>
        <div className="px-[25px] sm:px-[45px]">
          <p className="text-[#F54B3E] text-[28px] font-[600]">{convertedSum?.toFixed(3)} CHF</p>
          <p>1 {outputCurrency} = {(1 / outputCurrencyValue)?.toFixed(5)} CHF</p>
        </div>
      </section>
      {lastUpdate && (
        <div className="flex items-center gap-[5px] w-fit mx-auto mt-[20px] mb-[100px]">
          <Info width={15} height={15} stroke="#616161" />
          <p className="text-[#616161] text-[14px] font-[300]">Dernière mise à jour le {' '}
            {new Date(lastUpdate).toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              timeZone: 'UTC',
            })} {' '} à {' '}
            {new Date(lastUpdate).toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: 'UTC',
            })}
          </p>
        </div>
      )}
      {outputCurrency && (
        <CurrenciesTicksChart outputCurrency={outputCurrency} currenciesTicks={currenciesWantedTicks} />
      )}
    </main>
  )
}
