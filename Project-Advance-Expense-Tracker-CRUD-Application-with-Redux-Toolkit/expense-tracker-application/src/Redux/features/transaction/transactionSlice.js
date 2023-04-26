import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from './transactionAPI'

// initial state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {}
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
export const removeTransaction = createAsyncThunk('transaction/removeTransaction', async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})

// Transaction slice
const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInactive: (state) => {
            state.editing = {}
        }
    },
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
            .addCase(removeTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isError = false;
                state.transactions = state.transactions.filter(t => t.id !== action.meta.arg) // the server didn't return id in payload that's way we use action.meta.arg to update our UI.
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

    }
})

export default transactionSlice.reducer;
export const { editInactive, editActive } = transactionSlice.actions;
