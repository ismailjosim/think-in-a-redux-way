import rootReducer from '../rootReducer';

// create our first middleware(custom Middleware)
const myLogger = store => next => action => {
    console.log(`Action: ${ JSON.stringify(action) }`);
    console.log(`Current State: ${ JSON.stringify(store.getState()) }`);


    const upcomingState = [action].reduce(rootReducer, store.getState())

    console.log(`Upcoming State: ${ JSON.stringify(upcomingState) }`);


    // pass action
    return next(action)
}

export default myLogger


/**
//? curried function example
const curried = (a) => (b) => (c) => {
    return a * b * c
}

console.log(curried(2)(3)(5));


 */
