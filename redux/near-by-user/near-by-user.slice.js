import { createSlice } from "@reduxjs/toolkit";

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
