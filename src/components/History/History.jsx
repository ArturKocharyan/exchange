import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IoArrowForward } from "react-icons/io5";
import style from "./style.module.css"
import { removeContract } from '../../redux/slices/contractSlice';

function History() {
    const contracts = useSelector(state => state.contract.contracts);
    const dispatch = useDispatch()

    return (
        <div className={style.main_container} >
            <div className={style.history_container}>
                <p>Contracts History</p>
                {
                    contracts?.map((item) => {
                        return (
                            <div key={Math.random(2)} className={style.item} >
                                <div className={style.time} >{item.date} 
                                <span className={style.remove} onClick={() => dispatch(removeContract(item))} >Dealate</span> </div>
                                <div className={style.info_container} >
                                    <div className={style.baseCount} >

                                        <div><img src={item.baseFlag} alt={item.baseCurrency} />{item.count}<span>{item.baseCurrency}</span> </div>
                                    </div>
                                    <div className={style.divaider}><span><IoArrowForward /></span></div>
                                    <div className={style.targetCount}>
                                        <div><img src={item.targetFlag} alt={item.targetCurrency} />{item.resoult.toFixed(1)} <span>{item.targetCurrency}</span> </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History