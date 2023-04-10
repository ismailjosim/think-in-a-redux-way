import { COLORCHANGED, STATUSCHANGED } from './actionTypes';
import initialState from './initialState';



const filtersReducer = (state = initialState, action) => {
    switch (action.payload) {
        case STATUSCHANGED:
            return {
                ...state,
                state: action.payload
            }
        case COLORCHANGED:
            const { color, changeType } = action.payload;

            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }
                default:
                    return state;

            }

        default:
            return state;
    }
}

export default filtersReducer;
