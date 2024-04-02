import { useEffect, useState } from 'react';

const useExchangeRate = (API_KEY, baseCurrency, targetCurrency) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        setExchangeRate(data.conversion_rates[targetCurrency]);
      })
      .catch(error => console.error('Error fetching exchange rate:', error));
  }, [API_KEY, baseCurrency, targetCurrency]);

  return exchangeRate;
};

export default useExchangeRate;
