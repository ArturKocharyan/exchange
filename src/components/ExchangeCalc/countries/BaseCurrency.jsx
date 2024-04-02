import React, { useState } from 'react'
import { Button, Popover, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setBaseCurrency } from '../../../redux/slices/currencySlice';
import style from './style.module.css'

function BaseCurrency(counties) {

    const dispatch = useDispatch()
    const baseCurrency = useSelector((state) => state.currency.baseCurrency)
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleVisibleChange = (visibility) => {
        setVisible(visibility);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
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
                        <Input placeholder="Search by country name" onChange={handleSearch} />
                        {filteredCountries.map((country) => {
                            return (
                                <div className={style.counties_list}
                                    key={country.name}
                                    onClick={() => {
                                        dispatch(setBaseCurrency(country))
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
                    <span>{baseCurrency.name}</span>
                    <span><img className={style.img_style} src={baseCurrency.flag} alt={baseCurrency.name} /></span>
                </Button>
            </Popover>
        </div>
    )
}

export default BaseCurrency