const { createStore, applyMiddleware } = require('redux');
const { delayActionMiddleware, fetchTodoMiddleware } = require('./middlewares');
const { fetchTodos } = require('./functions');

// initial state
const initialState = {
    todos: [],
}

// Reducer function
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    }
                ]
            }
        case 'todos/todoLoaded':
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            }

        default:
            break;
    }
}

// store
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware, fetchTodoMiddleware))

// subscription: only when we don't have any reactive environment (i.e REACT JS)
// subscribe to state changes:
store.subscribe(() => {
    console.log(store.getState()); // show output when a state will change.
})


// dispatch action
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "Learn Redux With LWS"
// })

// dispatch action
store.dispatch(fetchTodos);
