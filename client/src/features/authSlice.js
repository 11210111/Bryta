import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, { rejectWithValue }) => {
    await axios
      .get("http://localhost:8080/auth/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => rejectWithValue(err));
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }) => {
    await axios
      .post(
        "http://localhost:8080/auth/signup",
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

export const kakao = createAsyncThunk(
  "auth/kakao",
  async ({ serverUrl, authorizationCode }, { rejectWithValue }) => {
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

// authSlice
const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state = action.payload;
        return state;
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
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default authSlice.reducer;
