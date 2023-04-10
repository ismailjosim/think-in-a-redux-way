import { COLORCHANGED, STATUSCHANGED } from './actionTypes'

// Color Changed Action
export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}


// Status Changed Action
export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}
