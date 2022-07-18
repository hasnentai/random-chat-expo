import { configureStore } from "@reduxjs/toolkit";
import nearByUserSlice from "./near-by-user.slice";

export default configureStore({
  reducer: {
    users: nearByUserSlice,
  },
});
