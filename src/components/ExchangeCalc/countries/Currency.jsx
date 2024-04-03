import React, { useState } from 'react'
import { Button, Popover, Input, Tooltip } from 'antd';
import countryCurrencies from '../../../asets/currency/currency';
import style from './style.module.css'

function Currency({counties, handleCurrencyChange}) {

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

    const filteredCountries = countryCurrencies.filter((country) =>
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
                                        handleCurrencyChange(country)
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
                onClick={() => setVisible(true)}
            >
                <span className={style.header_text} >Select Base Currency</span>
                <Button className={style.select_country} >
                    <span>{counties.name}</span>
                    <span><img className={style.img_style} src={counties.flag} alt={counties.name} /></span>
                </Button>
            </Popover>
        </div>
    )
}

export default Currency