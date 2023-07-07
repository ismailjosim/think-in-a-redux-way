import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"


//==> API Slice
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // we can use it so that we can change it only one place.
        baseUrl: process.env.REACT_APP_API_URL
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
})
