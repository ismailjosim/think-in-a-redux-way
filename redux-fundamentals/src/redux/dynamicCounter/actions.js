import { DDECREMENT, DINCREMENT } from './actionTypes'



// increment action
export const dynamicIncrement = value => {
    return {
        type: DINCREMENT,
        payload: value
    }
}

// decrement action
export const dynamicDecrement = value => {
    return {
        type: DDECREMENT,
        payload: value
    }
}
