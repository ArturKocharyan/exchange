import React, { useState } from 'react'
import style from "./style.module.css"
import { Button, Input, Tooltip } from 'antd'
import Currency from './countries/Currency'
import { useSelector, useDispatch } from 'react-redux'
import useExchangeRate from '../../hooks/useExchangeRate'
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { setChangeCurrency } from '../../redux/slices/currencySlice'
import { setBaseCurrency } from '../../redux/slices/currencySlice'
import { setTargetCurrency } from '../../redux/slices/currencySlice'

function Exchange() {

    const [amount, setAmount] = useState(1);
    const passBaseCurrency = useSelector((state) => state.currency.baseCurrency)
    const passTargetCurrency = useSelector((state) => state.currency.targetCurrency)
    const exchangeRate = useExchangeRate(passBaseCurrency.currency, passTargetCurrency.currency);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [changeResult, setChangeResult] = useState(0)
    const [contract, setContract] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (isNaN(newValue) || newValue === " " || newValue === "00") {
            setTooltipVisible(true);
            setTimeout(() => {
                setTooltipVisible(false);
            }, 1000);
        } else {
            setAmount(newValue);
            setTooltipVisible(false);
        }
    };

    const getResult = () => {
        setChangeResult(amount)
    }

    // const store = () => {
    //     setContract({
    //         baseName: passBaseCurrency.name,
    //         targetName: passTargetCurrency.name,
    //         count: changeResult,
    //         resoult: changeResult * exchangeRate
    //     })
    // }


    const calculateExchange = () => {
        const result = changeResult * exchangeRate;
        return <div className={style.resoult} >{result.toFixed(1)} {passTargetCurrency.currency}</div>;
    };

    return (
        <div className={style.main_container} >
            <div  className={style.exchange_container}>
                <div className={style.inputs_places}>
                    <div className={style.select_container} >
                        <Currency
                            counties={passBaseCurrency}
                            handleCurrencyChange={(country) => dispatch(setBaseCurrency(country))} />
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
                                    suffix={passBaseCurrency.currency}
                                />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={style.mid_container} >
                        <span onClick={() => {
                            dispatch(setChangeCurrency())
                        }} ><IoSwapHorizontalOutline /></span>
                    </div>
                    <div className={style.resoult_container} >
                        <Currency
                            counties={passTargetCurrency}
                            handleCurrencyChange={(country) => dispatch(setTargetCurrency(country))} />
                        <div>{calculateExchange()}</div>
                    </div>
                </div>
                <div className={style.btn_container} onClick={() => {getResult()}} > <Button>ExChange</Button></div>
            </div>
        </div>
    )
}

export default Exchange