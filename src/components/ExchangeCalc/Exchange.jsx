import React, { useState } from 'react';
import style from './style.module.css';
import { Button, Input, Tooltip } from 'antd';
import Currency from './countries/Currency';
import { useSelector, useDispatch } from 'react-redux';
import useExchangeRate from '../../hooks/useExchangeRate';
import { IoSwapHorizontalOutline } from 'react-icons/io5';
import { setChangeCurrency, setBaseCurrency, setTargetCurrency } from '../../redux/slices/currencySlice';
import { addContract } from '../../redux/slices/contractSlice';

function Exchange() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);
    const passBaseCurrency = useSelector(state => state.currency.baseCurrency);
    const passTargetCurrency = useSelector(state => state.currency.targetCurrency);
    const exchangeRate = useExchangeRate(passBaseCurrency.currency, passTargetCurrency.currency);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [changeResult, setChangeResult] = useState(0);

    const handleChange = e => {
        const newValue = e.target.value;
        if (isNaN(newValue) || newValue === ' ' || newValue === '00') {
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
        setChangeResult(amount);
        const resoult = amount * exchangeRate;
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        var uid = (new Date().getTime()).toString(36)
        const contractData = {
            id: uid,
            baseFlag: passBaseCurrency.flag,
            targetFlag: passTargetCurrency.flag,
            baseCurrency: passBaseCurrency.currency,
            targetCurrency: passTargetCurrency.currency,
            count: amount,
            resoult: resoult,
            date: `${month}/${day} - ${hours}:${minutes}:${seconds}`
        };
        dispatch(addContract(contractData));
    };

    const calculateExchange = () => {
        const result = changeResult * exchangeRate;
        return <div className={style.resoult}>{result.toFixed(1)} {passTargetCurrency.currency}</div>;
    };

    return (
        <div className={style.main_container}>
            <div className={style.exchange_container}>
                <div className={style.inputs_places}>
                    <div className={style.select_container}>
                        <Currency
                            counties={passBaseCurrency}
                            handleCurrencyChange={country => dispatch(setBaseCurrency(country))}
                        />
                        <div className={style.input_container}>
                            <Tooltip open={tooltipVisible} title="!!! Please enter a valid number." placement="bottom" color="red">
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
                    <div className={style.mid_container}>
                        <span onClick={() => {
                            dispatch(setChangeCurrency());
                        }}><IoSwapHorizontalOutline /></span>
                    </div>
                    <div className={style.resoult_container}>
                        <Currency
                            counties={passTargetCurrency}
                            handleCurrencyChange={country => dispatch(setTargetCurrency(country))}
                        />
                        <div>{calculateExchange()}</div>
                    </div>
                </div>
                <div className={style.btn_container} onClick={getResult}><Button>Exchange</Button></div>
            </div>
        </div>
    );
}

export default Exchange;
