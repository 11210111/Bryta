import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (loginInfo) => {
  const response = await axios.post(
    "https://api.bryta.shop/auth/login",
    loginInfo,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (user) => {
  await axios.get("https://api.bryta.shop/auth/logout", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
    withCredentials: true,
  });
});

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }) => {
    await axios.post(
      "https://api.bryta.shop/auth/signup",
      { username, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

export const kakao = createAsyncThunk(
  "auth/kakao",
  async ({ serverUrl, authorizationCode }) => {
    const code = { code: authorizationCode };
    const res = await axios
      .post(serverUrl, code, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      });
    return res;
  }
);

export const editInfo = createAsyncThunk(
  "auth/editInfo",
  async ({ isLogin, payload, password }, { rejectWithValue }) => {
    try {
      await axios.patch(
        "https://api.bryta.shop/mypage",
        {
          username: payload.username,
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
  "auth/deleteInfo",
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

// authSlice
const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state = null;
        return state;
      })
      .addCase(signup.fulfilled, () => {})
      .addCase(kakao.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(editInfo.fulfilled, (state, action) => {
        const res = state;
        res.data = action.payload;
        return res;
      })
      .addCase(deleteInfo.fulfilled, (state) => {
        state = null;
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default authSlice.reducer;
