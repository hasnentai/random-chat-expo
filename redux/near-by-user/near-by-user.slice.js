import { createSlice } from "@reduxjs/toolkit";

/**
 * @exports nearByUserSlice
 * @description Create a Slice for user info who are near by and which can be used to display on the screen
 */

export const nearByUserSlice = createSlice({
  name: "users",
  initialState: {
    arr: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.arr = [...state.arr, action.payload];
    },
    removeUser: (state) => {
      state.arr = [action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUsers, removeUser } = nearByUserSlice.actions;
export default nearByUserSlice.reducer;
