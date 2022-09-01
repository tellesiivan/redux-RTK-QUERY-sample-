import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export default function PostAuthor({ userID }) {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userID);

  return <span>{author ? author.name : "Unknown author"}</span>;
}
