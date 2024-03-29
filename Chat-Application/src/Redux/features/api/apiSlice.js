import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,

        // send bearer token for each api request
        prepareHeaders: async (headers, { getState, endpoint }) => {
            // get token from getState
            const token = getState()?.auth?.accessToken;

            if (token) {
                headers.set("Authorization", `Bearer ${ token }`)
            }

            return headers;


        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),

})
