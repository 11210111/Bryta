import { createSlice } from "@reduxjs/toolkit";
import { getFavOne } from "./API/favOneAPI";

const initialState = [];

const favOneSlice = createSlice({
  name: "favOne",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavOne.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      // .addCase(patchMovie.fulfilled, (state) => {
      //   console.log(current(state));
      // })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default favOneSlice.reducer;
