
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice'
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        videos: videosReducer,
        video: videoReducer,
    }
})

export default store;
