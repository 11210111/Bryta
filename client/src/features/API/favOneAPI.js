import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavOne = createAsyncThunk(
  "favOne/getFavOne",
  async ({ isLogin, id }) => {
    const response = await axios
      .get(
        `http://ec2-13-209-3-25.ap-northeast-2.compute.amazonaws.com:8080/favorite/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => res.data.data);
    return response;
  }
);
