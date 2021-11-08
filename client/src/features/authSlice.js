import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./API/authAPI";

const initialState = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(logout.fulfilled, (state) => {
        state = null;
        return state;
      })
      .addCase(signup.fulfilled, () => {})
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default authSlice.reducer;
