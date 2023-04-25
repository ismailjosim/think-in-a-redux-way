
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice'
import tagsReducer from '../features/tags/tagsSlice'
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        videos: videosReducer,
        video: videoReducer,
        tags: tagsReducer,
        relatedVideos: relatedVideosReducer,
    }
})

export default store;
