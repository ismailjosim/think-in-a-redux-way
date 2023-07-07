
// require node module: node-fetch@2: because fetch is not available in node package. it's only available in browser. although latest node have the fetch module included for experimental purpose.

// const { fetch } = require('node-fetch');
const { fetchTodos } = require('./functions');

const delayActionMiddleware = store => next => action => {
    if (action.type === "todos/todoAdded") {

        // delay function to dispatch: asynchronous behavior in redux
        console.log("I'm Delaying You!");

        setTimeout(() => {
            next(action);

        }, 2000);
        return;
    }

    return next(action)
}


const fetchTodoMiddleware = store => next => async (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action);

}




module.exports = {
    delayActionMiddleware,
    fetchTodoMiddleware
}

// Note: Thunk means to delay something.
