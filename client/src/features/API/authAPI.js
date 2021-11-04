import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (loginInfo) => {
  const response = await axios.post(
    "http://localhost:8080/auth/login",
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
    .get("http://localhost:8080/auth/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
      withCredentials: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
