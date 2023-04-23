
import videosReducer from '../features/videos/videosSlice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        videos: videosReducer
    }
})

export default store;
