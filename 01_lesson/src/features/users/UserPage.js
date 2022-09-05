import { useSelector } from "react-redux";
import { selectUserWithId } from "../users/usersSlice";
import { selectPostsByUser } from "./../posts/postSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserWithId(state, Number(userId)));

  //   const postsForUser = useSelector((state) => {
  //     const allPost = selectAllPosts(state);
  //     return allPost.filter((post) => post.userId === Number(userId));
  //   });

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>

      {postTitles.length === 0 ? (
        "Nothing has been posted yet"
      ) : (
        <ol>{postTitles}</ol>
      )}
    </section>
  );
};

export default UserPage;
