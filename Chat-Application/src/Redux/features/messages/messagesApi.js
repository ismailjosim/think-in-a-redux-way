import { apiSlice } from '../api/apiSlice';


export const messagesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoints goes here
        getMessages: builder.query({
            query: (id) =>
                `/messages?conversationId=${ id }&_sort=timestamp&_order=desc&_page=1&_limit=${ process.env.REACT_APP_MESSAGES_LIMIT }`,
        }),
    }),
})

export const { useGetMessagesQuery } = messagesApi;
