import React, { useState } from 'react'
import style from "./style.module.css"
import { Input } from 'antd'
import BaseCurrency from './countries/BaseCurrency'
import countryCurrencies from "../../asets/currency/currency"
import { useSelector } from 'react-redux'
import TargetCurrency from './countries/TargetCurrency'
import useExchangeRate from '../../hooks/useExchangeRate'

function Exchange() {

    const API_KEY = '2d8471f2637863411ff1cdff';
    const [amount, setAmount] = useState(1);
    const baseCurrency = useSelector((state) => state.currency.baseCurrency)
    const targetCurrency =useSelector((state) => state.currency.targetCurrency)
    const exchangeRate = useExchangeRate(API_KEY, baseCurrency, targetCurrency);

    const calculateExchange = () => {
        if (!exchangeRate) return 'Loading...';

        const result = amount * exchangeRate;
        return <div className={style.resoult} >{result.toFixed(1)} {targetCurrency}</div>;
    };

    return (
        <div className={style.main_container} >
            <div className={style.exchange_container} >
                <div className={style.select_container} >
                    <BaseCurrency counties={countryCurrencies} />
                    <Input onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className={style.resoult_container} >
                    <TargetCurrency counties={countryCurrencies} />
                    <div>{calculateExchange()}</div>
                </div>
                <div className={style.result_container} ></div>
            </div>
        </div>
    )
}

export default Exchange