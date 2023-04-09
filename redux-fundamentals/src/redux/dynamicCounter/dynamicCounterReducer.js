import { DDECREMENT, DINCREMENT } from './actionTypes'



// Initial State
const initialState = {
    value: 0,
}

// Counter Reducer Function
const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return state
    }
}


export default dynamicCounterReducer;
