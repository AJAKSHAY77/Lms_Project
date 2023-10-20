import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: localStorage.getItem("isLoggedin") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

// export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
