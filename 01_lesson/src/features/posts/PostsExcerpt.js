import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`/posts/${post.id}`}>View Post</Link>
        <PostAuthor userID={post.userId} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
