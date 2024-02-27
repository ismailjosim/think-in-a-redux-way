import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authSliceReducer from '../features/auth/authSlice'
import conversationsSliceReducer from '../features/conversations/conversationsSlice'
import messagesSliceReducer from '../features/messages/messagesSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    conversations: conversationsSliceReducer,
    messages: messagesSliceReducer,
  },
  // enable/disable devtools
  devTools: process.env.NODE_ENV !== 'production',

  // setup middlewares
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(apiSlice.middleware)
  }
})
