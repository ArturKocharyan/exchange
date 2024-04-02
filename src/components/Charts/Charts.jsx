import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import style from './style.module.css';
import countryCurrencies from '../../asets/currency/currency'; // Importing the countryCurrencies array
import { Button } from 'antd';

const Charts = () => {
    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState('bar');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://open.er-api.com/v6/latest');
                const data = await response.json();

                // Filter currency data for only the specified countries
                const filteredData = {};
                countryCurrencies.forEach(country => {
                    filteredData[country.currency] = data.rates[country.currency];
                });

                const labels = countryCurrencies.map(country => country.name);
                const values = countryCurrencies.map(country => filteredData[country.currency]);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Currency Value',
                        data: values,
                        borderColor: 'blue',
                        fill: false
                    }]
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData) {
            const ctx = document.getElementById('currencyChart').getContext('2d');
            const chart = new Chart(ctx, {
                type: chartType,
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            return () => {
                chart.destroy();
            };
        }
    }, [chartData, chartType]);

    const handleTabChange = (type) => {
        setChartType(type);
    };

    return (
        <div className={style.main_container} >
            <div>
                <div  >
                    <canvas id="currencyChart" width="400" height="100"></canvas>
                </div>
                <div className={style.button_container} >
                    <Button onClick={() => handleTabChange('line')} className={chartType === 'line' ? style.active_tab : style.tab}>Line Chart</Button>
                    <Button onClick={() => handleTabChange('bar')} className={chartType === 'bar' ? style.active_tab : style.tab}>Bar Chart</Button>
                </div>
            </div>
        </div>
    );
};

export default Charts;
