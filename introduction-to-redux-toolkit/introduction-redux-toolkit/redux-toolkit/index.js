const store = require("./app/store");
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounter');
const { fetchPost } = require('./features/post/postSlice')

// initial state
// console.log(`Initial state ${ JSON.stringify(store.getState()) }`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
store.dispatch(fetchPost());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());


// dynamic counter dispatch actions
// store.dispatch(dynamicCounterActions.increment(10));

// store.dispatch(dynamicCounterActions.increment(5));

// store.dispatch(dynamicCounterActions.decrement(5));
