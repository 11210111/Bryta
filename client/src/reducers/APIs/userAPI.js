import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (loginInfo) => {
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

export const logout = createAsyncThunk("user/logout", async () => {
  await axios.get("http://localhost:8080/auth/logout");
});
