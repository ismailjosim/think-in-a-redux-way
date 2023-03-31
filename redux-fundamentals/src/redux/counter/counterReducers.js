import { DECREMENT, INCREMENT } from './actionTypes'


// Initial State
const initialState = {
    value: 0,
}

// Counter Reducer Function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return state
    }
}


export default counterReducer;
