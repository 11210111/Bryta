import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async (isLogin) => {
    const favorite = await axios
      .get("http://api.bryta.shop/favorite", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isLogin.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => res.data);
    return favorite.favoriteActor.favorites;
  }
);

export const addFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async ({ isLogin, payload }) => {
    try {
      await axios
        .post(
          "http://localhost:8080/favorite",
          { actorId: payload.actorId },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${isLogin.accessToken}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => console.log(res));
      return payload;
    } catch (err) {
      throw err;
    }
  }
);

export const delFavorite = createAsyncThunk(
  "favorite/delFavorite",
  async ({ isLogin, payload }) => {
    const id = payload.actorId;
    try {
      await axios
        .delete(`http://localhost:8080/favorite/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          withCredentials: true,
        })
        .then((res) => console.log(res));
      return payload;
    } catch (err) {
      throw err;
    }
  }
);
