
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice'
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        videos: videosReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
    }
})

export default store;
