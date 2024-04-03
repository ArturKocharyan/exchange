import { useState, useEffect } from 'react';
import countryCurrencies from '../asets/currency/currency';

const useCurrencyData = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://open.er-api.com/v6/latest');
                const data = await response.json();

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
                        borderColor: 'red',
                        fill: false
                    }]
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return chartData;
};

export default useCurrencyData;
