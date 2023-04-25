import axiosInstance from '../../../utils/axios'


export const getVideos = async (tags, search) => {
    let queryStr = '';

    if (tags.length > 0) {
        queryStr += tags.map((tag) => `tags_like=${ tag }`).join('&');
    }
    if (search !== '') {
        queryStr += `&q=${ search }`;
    }
    const res = await axiosInstance.get(`/videos/?${ queryStr }`);
    return res.data;
}
