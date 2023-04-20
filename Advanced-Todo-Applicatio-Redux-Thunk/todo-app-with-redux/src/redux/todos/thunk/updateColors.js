import { colorSelected } from '../actions';

// Add new todo and save them permanently to the database.
const updateColor = (todoId, color) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${ todoId }`, {
            method: "PATCH",
            body: JSON.stringify({
                color: color
            }),
            headers: {
                "content-type": "application/json; charSet=UTF-8"
            }
        });
        const todo = await res.json();

        // actual action dispatch
        dispatch(colorSelected(todoId, color));

    }
}
export default updateColor;
