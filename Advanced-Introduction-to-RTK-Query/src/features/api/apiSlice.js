import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",  // if we don't insert api path name by default it will pick api
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({ // get All videos
            query: () => "/videos", // Here we can also use this way: "/videos", but for to remember one method we can use this method.
        }),
        getVideo: builder.query({ // get Single Video
            query: (id) => `/videos/${ id }`,
        }),

    }),
});

export const { useGetVideosQuery, useGetVideoQuery } = apiSlice;
