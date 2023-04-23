import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from './actionTypes'

// Add action New todo
export const added = todoText => {
    return {
        type: ADDED,
        payload: todoText
    }
}
// loaded action
export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos
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
export const colorSelected = (todoId, color) => {
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
        type: DELETED,
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
