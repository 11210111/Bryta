import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// persist : session storage 유지
import storage from "redux-persist/lib/storage/session";
// import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import userReducer from "./userSlice";
import favoriteReducer from "./favoriteSlice";
import favOneReducer from "./favOneSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // 스토리지에서 관리
  blacklist: ["favorite", "favOne", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  favorite: favoriteReducer,
  favOne: favOneReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
