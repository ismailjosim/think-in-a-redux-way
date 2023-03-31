import { createStore } from 'redux';
import counterReducer from './counter/counterReducers';


const store = createStore(counterReducer)

export default store;
