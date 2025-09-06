import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [], // array to store cart items
    reducers: {
        add: () => { },
        remove: () => { },
        clearCart: () => [] // clear all items
    }
});

export const { add, remove, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
