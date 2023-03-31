// target element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('Increment');
const decrementEl = document.getElementById('decrement');


// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';



// ? action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value, // payload is similar to value
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}



//? initial state
const initialState = {
    value: 0
}

//? Reducer Function
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state, // copy Previous value
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state; // return default
    }
}

//? create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const currentState = store.getState();
    counterEl.innerText = currentState.value.toString();

}

//? update UI initially.
render()


store.subscribe(render)

// button click Listener
// decrement Element
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(10))

})

// decrement Element
decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(5))
})
