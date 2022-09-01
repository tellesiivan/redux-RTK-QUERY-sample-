import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";
import { fetchUsers } from "./features/users/usersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
