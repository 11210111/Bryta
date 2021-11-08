import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editInfo = createAsyncThunk(
  "user/editInfo",
  async({isLogin, payload, password }, { rejectWithValue }) => {
    try {
      await axios.patch(
        "http://localhost:8080/mypage",
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
      "http://localhost:8080/mypage",

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
