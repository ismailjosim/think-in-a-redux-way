const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const fetch = require('node-fetch');
// 1. initial State
const initialState = {
    loading: false,
    posts: [],
    error: null
}

// 2. create slice
const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }

})

// 3. create Async Thunk function to fetch data.
const fetchPost = createAsyncThunk("post/fetchPosts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();
    return posts;
})


module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;


/*
* When we return a promise from createAsyncThunk function it will automatically return 3 action.
? 1. promise.pending
* 1. promise.fulfilled: here we get our all data.
? 1. promise.rejected: show error that occurs in our promise.

*/
