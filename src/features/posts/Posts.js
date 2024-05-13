import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsslice";
import "./Posts.css"; // Import the CSS file

const Posts = () => {
  const posts = useSelector(selectPosts);
  return (
    <div className="posts-container">
      {" "}
      {/* Added a container for styling */}
      <h1>Posts</h1>
      <ul className="posts-list">
        {" "}
        {/* Added a class for the list */}
        {posts.map((post) => (
          <li key={post.email} className="post-item">
            {" "}
            {/* Added a class for each list item */}
            <p>
              <strong>Name:</strong> {post.name}
            </p>
            <p>
              <strong>Email:</strong> {post.email}
            </p>
            <p>
              <strong>Age:</strong> {post.age}
            </p>
            <p>
              <strong>Phone:</strong> {post.phone}
            </p>
            <p>
              <strong>Country:</strong> {post.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
