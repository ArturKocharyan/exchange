import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    baseCurrency:"USD",
    targetCurrency: "AMD"
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
    }
  },
});

export const { setBaseCurrency,setTargetCurrency } = currencySlise.actions;

export default currencySlise.reducer;