import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",  // if we don't insert api path name by default it will pick api
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Videos", "Video", "RelatedVideos"],
    endpoints: (builder) => ({
        getVideos: builder.query({ // get All videos
            query: () => "/videos", // Here we can also use this way: "/videos", but for to remember one method we can use this method.
            keepUnusedDataFor: 600,
            providesTags: ["Videos"]
        }),
        getVideo: builder.query({ // get Single Video
            query: (id) => `/videos/${ id }`,
            providesTags: (result, error, arg) => [{ type: "Video", id: arg }]
        }),
        getRelatedVideos: builder.query({ // get Related Videos
            query: ({ id, title }) => {
                const tags = title.split(' ');
                const likes = tags.map(tag => `title_like=${ tag }`)
                const queryStr = `/videos?${ likes.join("&") }&_limit=4`;
                return queryStr;

            },
            providesTags: (result, error, arg) => [{ type: "RelatedVideos", id: arg.id }]
        }),
        addVideo: builder.mutation({ // Add Video
            // query: (body) => `/videos`,
            // another method
            query: (data) => ({
                url: "/videos",
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Videos"]
        }),
        editVideo: builder.mutation({ // Add Video
            // query: (body) => `/videos`,
            // another method
            query: ({ id, data }) => ({
                url: `/videos/${ id }`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "Videos",
                { type: "Video", id: arg.id },
                { type: "RelatedVideo", id: arg.id }
            ]
        }),


    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation
} = apiSlice;

