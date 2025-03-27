import React from "react";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Hook with Redux</h1>
      <PostsList />
    </div>
  );
};

export default App;
