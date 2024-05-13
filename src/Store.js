import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/posts/postsslice";

export const Store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
