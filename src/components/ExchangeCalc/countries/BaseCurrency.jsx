import React, { useState } from 'react'
import { Button, Popover } from 'antd';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../../redux/slices/currencySlice';
import style from './style.module.css'

function BaseCurrency(counties) {

    const dispatch = useDispatch()
    const [ selectedCountry, setSelectedCountry ] = useState(counties.counties[0])

    return (
        <div>
            <Popover 
                className={style.popver}
                title="Countries and Currencies"
                content={
                    <div className={style.select_container} >
                        {counties.counties.map((country) => {
                            return (
                                <div className={style.counties_list}
                                key={country.name}
                                onClick={() => {
                                    setSelectedCountry(country)
                                    dispatch(setBaseCurrency(country.currency))}}
                                >
                                    <span>{country.name}</span>
                                    <span><img className={style.img_style} src={country.flag} alt={country.name} /></span>
                                </div>
                                
                            )
                        }
                        )}
                    </div>
                }
                trigger="click"
            >
                <span className={style.header_text} >Select Base Currency</span>
                <Button className={style.select_country} >
                    <span>{selectedCountry.name}</span>
                    <span><img className={style.img_style} src={selectedCountry.flag} alt={selectedCountry.name}/></span>
                </Button>
            </Popover>
        </div>
    )
}

export default BaseCurrency