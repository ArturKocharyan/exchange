import React from 'react'
import { Popover } from 'antd';

function Countries(counties) {


    return (
        <div>
            <Popover
                title="Countries and Currencies"
                content={
                    <div>
                        {counties.counties.map((country) => {
                            return (
                                <div key={country.name}>
                                    <span>{country.name}</span><span><img src={country.flag} alt={country.name}/></span>
                                </div>
                            )
                        }
                        )}
                    </div>
                }
                trigger="click"
            >
                <button>Show Countries</button>
            </Popover>
        </div>
    )
}

export default Countries