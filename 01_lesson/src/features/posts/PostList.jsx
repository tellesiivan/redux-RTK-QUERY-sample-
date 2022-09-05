import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";
import {
  selectPostIds,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";

function PostList() {
  const dispatch = useDispatch();

  const orderedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>;
  } else if (status === "succeeded") {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}

export default PostList;
