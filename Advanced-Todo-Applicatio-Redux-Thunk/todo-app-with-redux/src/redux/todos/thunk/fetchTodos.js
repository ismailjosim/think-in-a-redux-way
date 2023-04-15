import { loaded } from '../actions';


const fetchTodos = async (dispatch, getState) => {
    const res = await fetch('http://localhost:9000/todos');
    const todos = await res.json();

    // actual action dispatch
    dispatch(loaded(todos))

}
export default fetchTodos;
