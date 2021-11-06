import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// persist : session storage 유지
import storage from "redux-persist/lib/storage/session";

import authReducer from "./authSlice";
import userReducer from "./userSlice";
import favoriteReducer from "./favoriteSlice";
import favOneReducer from "./favOneSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  favorite: favoriteReducer,
  favOne: favOneReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
