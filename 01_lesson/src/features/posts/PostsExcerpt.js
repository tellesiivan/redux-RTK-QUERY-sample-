import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  console.log(post);

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
