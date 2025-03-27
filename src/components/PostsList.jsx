import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";

const PostsList = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Define URL here
  const [posts, loading, error, refresh] = useFetch(API_URL);

  // Memoize post list rendering to prevent unnecessary re-renders
  const renderedPosts = useMemo(
    () =>
      posts.map((post) => (
        <li
          key={post.id}
          style={{
            marginBottom: "5px",
            padding: "5px",
            borderBottom: "1px solid #ccc",
            textAlign: "justify",
          }}
        >
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      )),
    [posts] // Recomputes only when posts change
  );

  return (
    <div style={{ padding: "10px", fontFamily: "sans-serif", background: "#e5e5e5" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Posts List</h2>

      {/* Show loading message while data is being fetched */}
      {loading && <p style={{ color: "#0a9396" }}>Loading...</p>}

      {/* Display error message if fetching fails */}
      {error && <p style={{ color: "#ef233c" }}>Error: {error}</p>}

      {/* Button to refresh and fetch posts again */}
      <button
        onClick={refresh}
        style={{
          background: "#134074",
          color: "#eef4ed",
          padding: "5px 10px",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Refresh
      </button>

      {/* Render memoized list of posts */}
      <ul style={{ padding: 0, listStyle: "none" }}>{renderedPosts}</ul>
    </div>
  );
};

export default PostsList;
