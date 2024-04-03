import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: loadContractsFromStorage(),
};

const MAX_CONTRACTS = 5;

function loadContractsFromStorage() {
  const storedContracts = localStorage.getItem('contracts');
  return storedContracts ? JSON.parse(storedContracts) : [];
}

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    addContract(state, action) {
      if (state.contracts.length >= MAX_CONTRACTS) {
        state.contracts.shift();
      }
      state.contracts.push(action.payload);
      saveContractsToStorage(state.contracts);
    },
  },
});

export const { addContract } = contractSlice.actions;

export default contractSlice.reducer;

function saveContractsToStorage(contracts) {
  localStorage.setItem('contracts', JSON.stringify(contracts));
}

