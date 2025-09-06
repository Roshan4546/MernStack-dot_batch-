import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"; // import the default reducer

export const CartStore = configureStore({
    reducer: {
        cart: CartReducer,
    },
});
