import React from "react";
import PostAuthor from "./PostAuthor";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userID={post.userId} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
