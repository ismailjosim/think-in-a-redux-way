// target element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('Increment');
const decrementEl = document.getElementById('decrement');



//? initial state
const initialState = {
    value: 0
}

//? Reducer Function
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state, // copy Previous value
            value: state.value + 1
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
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
    store.dispatch({
        type: 'increment'
    })

})

// decrement Element
decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    })
})


