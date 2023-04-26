import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from './transactionAPI'

// initial state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: ""
}

//Get: create async Thunk
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    const transactions = await getTransactions();
    return transactions;
})

// add : create async Thunk
export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
})

// put : create async Thunk
export const updateTransaction = createAsyncThunk('transaction/updateTransaction', async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
})

// Delete : create async Thunk
export const removeTransactions = createAsyncThunk('transaction/removeTransactions', async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})

// Transaction slice
const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: (builder) => {
        builder

            // Get => Transactions
            .addCase(fetchTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.transactions = [];
                state.isError = true;
                state.error = action.error?.message;
            })

            // add => Transaction
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions.push(action.payload)
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

            // put => Transaction
            .addCase(updateTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;

                // update UI according to server data.
                const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id);
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

            // delete => Transaction
            .addCase(removeTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = state.transactions.filter(t => t.id !== action.payload)
            })
            .addCase(removeTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

    }
})

export default transactionSlice.reducer;
