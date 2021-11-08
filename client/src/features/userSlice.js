import { createSlice } from "@reduxjs/toolkit";
import { editInfo, deleteInfo } from "./API/userAPI";
const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editInfo.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(deleteInfo.fulfilled, (state) => {
        state = null;
        return state;
      });
  },
});

export default userSlice.reducer;
