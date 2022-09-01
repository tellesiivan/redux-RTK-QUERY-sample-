import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("post/users", async () => {
  const req = await axios.get(POSTS_URL);

  return req.data;
});

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload; // overwrites existing state with action payload
    });
  },
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
