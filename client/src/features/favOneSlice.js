import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavOne = createAsyncThunk(
  "favOne/getFavOne",
  async ({ isLogin, id }) => {
    const response = await axios
      .get(`https://api.bryta.shop//favorite/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isLogin.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => res.data.data);
    return response;
  }
);

// favOneSlice
const favOneSlice = createSlice({
  name: "favOne",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavOne.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default favOneSlice.reducer;
