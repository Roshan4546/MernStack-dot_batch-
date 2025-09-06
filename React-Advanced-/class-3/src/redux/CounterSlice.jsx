import { createSlice } from "@reduxjs/toolkit";


// add initial value or state.
const initialState = {
    value: 0,
}

// counter slice

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { // add all functionality
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})
// to access the functionality from counter slice we use this type of syntax.
// Action creators are generated for each case reducer function.
export const { increment, decrement, reset } = CounterSlice.actions;

// reducers - functionality
export default CounterSlice.reducer;