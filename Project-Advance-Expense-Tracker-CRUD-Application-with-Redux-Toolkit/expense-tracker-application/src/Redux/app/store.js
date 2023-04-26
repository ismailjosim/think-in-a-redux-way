import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transaction/transactionSlice';

const store = configureStore({
    reducer: {
        transaction: transactionReducer

    }
})

export default store;
