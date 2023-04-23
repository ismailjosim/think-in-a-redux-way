import { added } from '../actions';

// Add new todo and save them permanently to the database.
const addTodo = (todoText) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:9000/todos', {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers: {
                "content-type": "application/json; charSet=UTF-8"
            }
        });
        const todo = await res.json();

        // actual action dispatch
        dispatch(added(todo.text));

    }
}
export default addTodo;
