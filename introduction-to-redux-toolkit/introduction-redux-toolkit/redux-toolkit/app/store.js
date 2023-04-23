const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('../features/counter/counterSlice');
const dynamicCounterReducer = require('../features/dynamicCounter/dynamicCounter');
const postReducer = require('../features/post/postSlice');

const { createLogger } = require('redux-logger');

const logger = createLogger()

// configure Store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddlewares) => {
        console.log(getDefaultMiddlewares());
        return getDefaultMiddlewares().concat(logger)
    }
})

module.exports = store; // default export.
