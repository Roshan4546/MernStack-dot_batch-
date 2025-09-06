import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";

// Create the store
export const store = configureStore({
    reducer: {
        // Use the reducer from your slice
        counter: CounterSlice.reducer,
    },
});
