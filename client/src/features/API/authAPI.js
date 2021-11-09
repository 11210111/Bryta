import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (loginInfo) => {
  const response = await axios.post(
    "https://api.bryta.shop:8080/auth/login",
    loginInfo,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (user) => {
  await axios
    .get("https://api.bryta.shop:8080/auth/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
      withCredentials: true,
    })
    .then((res) => console.log(res));
});

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }) => {
    await axios
      .post(
        "https://api.bryta.shop:8080/auth/signup",
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  }
);
