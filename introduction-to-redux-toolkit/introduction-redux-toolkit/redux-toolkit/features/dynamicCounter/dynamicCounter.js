const { createSlice } = require('@reduxjs/toolkit');
const { counterActions } = require('../counter/counterSlice')

// step - 01: initial state
const initialState = {
    count: 0,
}

// step - 02: slice
const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        }
    },


    // Extra Reducer function
    // extraReducers: {
    //     ['counter/increment']: (state, action) => {
    //         state.count += 1;
    //     }

    // }
    extraReducers:
        (builder) => {
            builder.addCase(counterActions.increment, (state, action) => {
                state.count += 5;
            })
            builder.addCase(counterActions.decrement, (state, action) => {
                state.count -= 1;
            })
        }
}


)

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
