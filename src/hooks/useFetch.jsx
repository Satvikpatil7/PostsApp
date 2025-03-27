import { useEffect, useMemo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { fetchPosts } from "../features/postsSlice";

const useFetch = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.posts);

  // Fetch posts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Memoize posts data to avoid unnecessary re-renders
  const posts = useMemo(() => data, [data]);

  // Memoize refresh function to prevent recreation on each render
  const refresh = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return [posts, loading, error, refresh];
};

export default useFetch;
