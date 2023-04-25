import axiosInstance from '../../../utils/axios'

// ?tags_like=javascript&tags_like=react&id_ne=4&limit=5
// return like this: ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({ tags, id }) => {
    const limit = 5;
    let queryStr = tags?.length > 0
        ? tags.map(tag => `tags_like=${ tag }`).join('&') + `&id_ne=${ id }&_limit=${ limit }`
        : `&id_ne${ id }&_limit=${ limit }`

    const res = await axiosInstance.get(`/videos/?${ queryStr }`);
    return res.data;
}
