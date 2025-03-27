import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";

// Configure and create the Redux store with postsReducer
export const store = configureStore({
  reducer: {
    posts: postsReducer, // Manages the state for posts
  },
});

// Custom Hooks for Redux (to simplify usage in components)
export const useAppDispatch = () => useDispatch(); // Dispatch actions
export const useAppSelector = useSelector; // Access Redux state
