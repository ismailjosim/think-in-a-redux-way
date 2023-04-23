import Swal from 'sweetalert2';
import { toggled } from '../actions';

// Add new todo and save them permanently to the database.
const updateStatus = (todoId, currentStatus) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${ todoId }`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus
            }),
            headers: {
                "content-type": "application/json; charSet=UTF-8"
            }
        });
        const todo = await res.json();
        if (todo.completed === true) {
            Swal.fire({
                icon: 'success',
                title: 'Your Task Is Completed 🎇',
                showConfirmButton: false,
                timer: 1000
            })
        }

        // actual action dispatch
        dispatch(toggled(todo.id));

    }
}
export default updateStatus;
