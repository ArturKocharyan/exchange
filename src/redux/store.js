import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./slices/currencySlice";
import contractSlice from "./slices/contractSlice";

export const store = configureStore({
    reducer: {
        currency: currencySlice,
        contract: contractSlice,
    }
}) 