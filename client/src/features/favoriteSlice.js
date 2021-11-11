import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async (isLogin) => {
    const favorite = await axios
      .get("https://api.bryta.shop//favorite", {
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
          "https://api.bryta.shop//favorite",
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
        .delete(`https://api.bryta.shop//favorite/${id}`, {
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

// favoriteSlice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavorite.fulfilled, (state, action) => {
        state = action.payload;

        return state;
      })
      // .addCase(addFavorite.pending, (state) => {
      //   state = [];
      //   return state;
      // })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(delFavorite.fulfilled, (state, action) => {
        state.filter((state) => state.actorId !== action.payload.actorId);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default favoriteSlice.reducer;
