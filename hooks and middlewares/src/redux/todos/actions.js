import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, TOGGLED } from './actionTypes'

// Add action
export const added = todoText => {
    return {
        type: ADDED,
        payload: todoText
    }
}

// Toggle action
export const toggled = todoId => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

// selected color action
export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}
// selected color action
export const deleted = todoId => {
    return {
        type: COLORSELECTED,
        payload: todoId,
    }
}

// all Completed Todo
export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,

    }
}
// clear Completed Todo
export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}
