import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts from a given URL
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

// Create a slice for managing posts state
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [], // Stores fetched posts
    loading: false, // Indicates loading state
    error: null, // Stores error message if request fails
  },
  reducers: {}, // No synchronous reducers needed

  // Handle async actions using extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true; // Set loading to true while fetching
        state.error = null; // Clear previous errors
        state.data=[];//Set data to empty array
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when data is received
        state.data = action.payload; // Store fetched posts
        state.error = null; // Clear previous errors
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false; // Stop loading on error
        state.error = action.error.message; // Store error message
      });
  },
});

export default postsSlice.reducer;
