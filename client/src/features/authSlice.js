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

// export const validateEmail = createAsyncThunk(
//   "auth/validateEmail",
//   async (email) => {
//     return await axios
//       .post("http://localhost:8080/auth/validateEmail", email, {
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       })
//       .then((res) => res.data);
//   }
// );

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
      // .addCase(validateEmail.fulfilled, (state, action) => {
      //   console.log(action.payload);
      //   return action.payload;
      // })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default authSlice.reducer;
