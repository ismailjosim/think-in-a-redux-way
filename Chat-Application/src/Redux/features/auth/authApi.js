import { apiSlice } from '../api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoints goes here
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),

            // we want to do something after user register
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // we will overwrite the onQueryStarted function
                try {
                    const res = await queryFulfilled

                    // store local storage
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        }),
                    )

                    // dispatch the function
                    dispatch(
                        userLoggedIn({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        }),
                    )
                } catch (error) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
            // we want to do something after user register
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // we will overwrite the onQueryStarted function
                try {
                    const res = await queryFulfilled

                    // store local storage
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        }),
                    )

                    // dispatch the function
                    dispatch(
                        userLoggedIn({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        }),
                    )
                } catch (error) {
                    // do nothing
                }
            },
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
