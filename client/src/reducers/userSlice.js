import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./APIs/userAPI";

const initialState = null;

const userSlice = createSlice({
  name: "user",
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
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default userSlice.reducer;
