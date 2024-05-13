import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import Count from "./count";

const Store = configureStore({
  devTools: true,
  reducer: {
    counter: CounterSlice,
    count: Count,
  },
});

export default Store;
