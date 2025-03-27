import { useEffect, useMemo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { fetchPosts } from "../features/postsSlice";

const useFetch = (url) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.posts);

  // Fetch posts when the component mounts or URL changes
  useEffect(() => {
    if (url) {
      dispatch(fetchPosts(url));
    }
  }, [dispatch, url]);

  // Memoize posts data to avoid unnecessary re-renders
  const posts = useMemo(() => data, [data]);

  // Memoize refresh function to prevent recreation on each render
  const refresh = useCallback(() => {
    if (url) {
      dispatch(fetchPosts(url));
    }
  }, [dispatch, url]);

  return [posts, loading, error, refresh];
};

export default useFetch;
