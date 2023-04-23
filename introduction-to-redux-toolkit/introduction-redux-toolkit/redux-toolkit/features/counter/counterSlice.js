const { createSlice } = require('@reduxjs/toolkit');

// step - 01: initial state
const initialState = {
    count: 0,
}

// step - 02: slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++
        },
        decrement: (state, action) => {
            state.count--
        }
    }
})

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
