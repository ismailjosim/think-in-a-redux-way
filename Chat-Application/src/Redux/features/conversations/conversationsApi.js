import { apiSlice } from '../api/apiSlice'

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoints goes here
        getConversations: builder.query({
            query: (email) =>
                `/conversations?participants_like=${ email }&_sort=timestamp&_order=desc&_page=1&_limit=${ process.env.REACT_APP_CONVERSATION_LIMIT }`,
        }),
    }),
})

export const { useGetConversationsQuery } = conversationsApi
