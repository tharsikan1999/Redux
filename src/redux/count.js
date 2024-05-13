import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
  name: "count",
  initialState: "",
  reducers: {
    showName(state, action) {
      return action.payload;
    },
  },
});

export const { showName } = Counter.actions;

export default Counter.reducer;
