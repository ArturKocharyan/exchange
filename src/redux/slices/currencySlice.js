import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    baseCurrency:{ name: "USA", currency: "USD", flag: "http://flags.fmcdn.net/data/flags/mini/us.png" },
    targetCurrency: { name: "Armenia", currency: "AMD", flag: "http://flags.fmcdn.net/data/flags/mini/am.png" }
};

const currencySlise = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action) => {
        state.targetCurrency = action.payload
    },
    setChangeCurrency: (state) => {
        const tempCurrency = state.baseCurrency;
        state.baseCurrency = state.targetCurrency;
        state.targetCurrency = tempCurrency;
    }
  },
});

export const { setBaseCurrency,setTargetCurrency, setChangeCurrency } = currencySlise.actions;

export default currencySlise.reducer;