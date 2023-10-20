import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AurhSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
  devTools: true,
});

export default Store;
