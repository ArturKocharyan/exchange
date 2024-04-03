import React, { useState } from 'react'
import style from "./style.module.css"
import { Input, Tooltip } from 'antd'
import BaseCurrency from './countries/BaseCurrency'
import countryCurrencies from "../../asets/currency/currency"
import { useSelector, useDispatch } from 'react-redux'
import TargetCurrency from './countries/TargetCurrency'
import useExchangeRate from '../../hooks/useExchangeRate'
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { setChangeCurrency } from '../../redux/slices/currencySlice'

function Exchange() {

    const [amount, setAmount] = useState(1);
    const baseCurrency = useSelector((state) => state.currency.baseCurrency.currency)
    const targetCurrency = useSelector((state) => state.currency.targetCurrency.currency)
    const exchangeRate = useExchangeRate( baseCurrency, targetCurrency);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (isNaN(newValue)) {
            setTooltipVisible(true);
        } else {
            setAmount(newValue);
            setTooltipVisible(false);
        }
    };

    const calculateExchange = () => {
        const result = amount * exchangeRate;
        return <div className={style.resoult} >{result.toFixed(1)} {targetCurrency}</div>;
    };

    return (
        <div className={style.main_container} >
            <div className={style.exchange_container} >
                <div className={style.select_container} >
                    <BaseCurrency counties={countryCurrencies} />
                    <div className={style.input_container} >
                        <Tooltip
                            open={tooltipVisible}
                            title="!!! Please enter a valid number."
                            placement="bottom"
                            color='red'
                        >
                            <Input
                                type="text"
                                value={amount}
                                onChange={handleChange}
                                placeholder="Enter amount"
                            />
                        </Tooltip>
                        <span>{baseCurrency}</span>
                    </div>
                </div>
                <div className={style.mid_container} >
                    <span onClick={() => {
                        dispatch(setChangeCurrency())
                    }} ><IoSwapHorizontalOutline /></span>
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