import React, { useState, useEffect } from 'react'
import style from "./style.module.css"
import { Input } from 'antd'
import Countries from './countries/Countries'
import countryCurrencies from "../../asets/currency/currency"

function Exchange() {

    const API_KEY = '2d8471f2637863411ff1cdff';
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`)
            .then(response => response.json())
            .then(data => {
                setExchangeRate(data.conversion_rates[targetCurrency]);
                console.log(data.conversion_rates);
            })
            .catch(error => console.error('Error fetching exchange rate:', error));
    }, [baseCurrency, targetCurrency]);



    const handleBaseCurrencyChange = (e) => {
        setBaseCurrency(e.target.value);
    };

    const handleTargetCurrencyChange = (e) => {
        setTargetCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const calculateExchange = () => {
        if (!exchangeRate) return 'Loading...';

        const result = amount * exchangeRate;
        return `${amount} ${baseCurrency} = ${result.toFixed(1)} ${targetCurrency}`;
    };

    return (
        <div className={style.main_container} >
            <div className={style.exchange_container} >
                <div className={style.select_container} >
                    <Countries counties={countryCurrencies} />
                    <Input onChange={handleAmountChange} />
                </div>
                <div className={style.resoult_container} >
                    <Input onChange={handleTargetCurrencyChange} />
                    <div>{calculateExchange()}</div>
                </div>
                <div className={style.result_container} ></div>
            </div>
        </div>
    )
}

export default Exchange