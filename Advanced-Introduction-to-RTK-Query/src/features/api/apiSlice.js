import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",  // if we don't insert api path name by default it will pick api
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({ // get All videos
            query: () => "/videos", // Here we can also use this way: "/videos", but for to remember one method we can use this method.
            keepUnusedDataFor: 60 // default value
        }),
        getVideo: builder.query({ // get Single Video
            query: (id) => `/videos/${ id }`,
        }),
        getRelatedVideos: builder.query({ // get Related Videos
            query: ({ id, title }) => {
                const tags = title.split(' ');
                const likes = tags.map(tag => `title_like=${ tag }`)
                const queryStr = `/videos?${ likes.join("&") }&_limit=4`;
                return queryStr;

            }
        }),
        addVideo: builder.mutation({ // Add Video
            // query: (body) => `/videos`,
            // another method
            query: (data) => ({
                url: "/videos",
                method: 'POST',
                body: data
            })
        }),


    }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation } = apiSlice;
