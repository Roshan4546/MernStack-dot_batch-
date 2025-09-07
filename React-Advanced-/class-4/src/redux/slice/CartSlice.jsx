import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [], // array to store cart items
    reducers: {
        add: (state, action) => {
            const item = action.payload; // ! input parameter pass from another page
            const existingItem = state.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1; // increase quantity if already in cart
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        remove: (state, action) => {
            const id = action.payload;
            const index = state.findIndex(i => i.id === id);
            if (index !== -1) {
                state.splice(index, 1); // remove item by index
            }
        },
        clearCart: () => [] // clear all items
    }
});

export const { add, remove, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
