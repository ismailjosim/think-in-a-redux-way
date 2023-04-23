import Swal from 'sweetalert2';
import { deleted } from '../actions';

// Add new todo and save them permanently to the database.
const deleteTodo = (todoId) => {
    return (dispatch, getState) => {
        if (todoId) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:9000/todos/${ todoId }`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(todo => {
                            Swal.fire(
                                'Deleted!',
                                'Your Task has been deleted.',
                                'success'
                            )
                            dispatch(deleted(todoId));
                        })
                        .catch(error => console.log(error));
                }
            })
        }
    }
}
export default deleteTodo;
