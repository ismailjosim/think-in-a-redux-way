import { deleted } from '../actions';

// Add new todo and save them permanently to the database.
const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${ todoId }`, {
            method: "DELETE",
        });
        const todo = await res.json();

        // actual action dispatch
        dispatch(deleted(todoId));

    }
}
export default deleteTodo;
