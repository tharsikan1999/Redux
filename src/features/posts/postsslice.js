import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "jhon",
    email: "jhon@gmail.com",
    age: 25,
    phone: +94751234567,
    country: "USA",
  },
  {
    name: "Doe",
    email: "doce@gmail.com",
    age: 30,
    phone: +94751234567,
    country: "UK",
  },
  {
    name: "Smith",
    email: "Smith@gmail.com",
    age: 35,
    phone: +94751234567,
    country: "AUS",
  },
  {
    name: "Kane",
    email: "kane@gmail.com",
    age: 40,
    phone: +94751234567,
    country: "NZ",
  },
  {
    name: "William",
    email: "william@gmail.com,",
    age: 45,
    phone: +94751234567,
    country: "CAN",
  },
  {
    name: "Parker",
    email: "parker@gmail.com",
    age: 50,
    phone: +94751234567,
    country: "IND",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.email !== action.payload.email);
    },
    updatePost: (state, action) => {
      return state.map((post) => {
        if (post.email === action.payload.email) {
          return action.payload;
        }
        return post;
      });
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
