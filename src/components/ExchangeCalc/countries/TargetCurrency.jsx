import React, { useState } from 'react'
import { Button, Popover, Input, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTargetCurrency } from '../../../redux/slices/currencySlice';
import style from './style.module.css'

function TargetCurrency(counties) {

    const dispatch = useDispatch()
    const targetCurrency = useSelector((state) => state.currency.targetCurrency)
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [tooltipVisible, setTooltipVisible] = useState(false)

    const handleSearchQueryChange = (value) => {
        setSearchQuery(value);
       if (isNaN(Number(value))){
        setTooltipVisible(false)
       }else{
        setTooltipVisible(true)
        setTimeout(() => {
            setTooltipVisible(false);
        }, 1000);
       }
    };

    const handleVisibleChange = (visibility) => {
        setVisible(visibility);
    };

    const filteredCountries = counties.counties.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Popover 
                className={style.popver}
                title="Countries and Currencies"
                content={
                    <div className={style.select_container} >
                       <Tooltip
                            open={tooltipVisible}
                            title="!!! Please enter a valid country."
                            placement="bottom"
                            color="red"
                        >
                            <Input
                                placeholder="Search by country name"
                                onChange={(e) => handleSearchQueryChange(e.target.value)}
                            />
                        </Tooltip>
                        {filteredCountries.map((country) => {
                            return (
                                <div className={style.counties_list}
                                key={country.name}
                                onClick={() => {
                                    dispatch(setTargetCurrency(country))
                                    setVisible(false);
                                }}
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
                open={visible}
                onVisibleChange={handleVisibleChange}
                onClick = {() => setVisible(true)}
            >
                <span className={style.header_text} >Select Target Currency</span>
                <Button className={style.select_country} >
                    <span>{targetCurrency.name}</span>
                    <span><img className={style.img_style} src={targetCurrency.flag} alt={targetCurrency.name}/></span>
                </Button>
            </Popover>
        </div>
    )
}

export default TargetCurrency