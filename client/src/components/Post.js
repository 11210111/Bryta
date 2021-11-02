import React from "react";
import "../css/Post.css";

export default function Post({ post }) {
  const changeDate = (date) => {
    return new Date(date).toLocaleDateString("ko-kr");
  };
  return (
    <div className="post-container">
      <section className="post-section">
        <div className="post-content">{post.content}</div>
        <div className="post-writer">{post.username}</div>
        <div className="post-date">{changeDate(post.createdAt)}</div>
      </section>
    </div>
  );
}
