import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editInfo = createAsyncThunk(
  "user/editInfo",
  async ({ isLogin, payload, password }, { rejectWithValue }) => {
    try {
      await axios.patch(
        "https://api.bryta.shop/mypage",
        {
          email: payload.email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          withCredentials: true,
        }
      );
    } catch (err) {
      rejectWithValue(err);
    }
    return payload;
  }
);

export const deleteInfo = createAsyncThunk(
  "user/deleteInfo",
  async (isLogin) => {
    await axios.delete(
      "https://api.bryta.shop/mypage",

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isLogin.accessToken}`,
        },
        withCredentials: true,
      }
    );
  }
);

// userSlice
const userSlice = createSlice({
  name: "user",
  initialState: null,
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
