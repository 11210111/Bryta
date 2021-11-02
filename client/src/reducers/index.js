import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// persist : session storage 유지
import storage from "redux-persist/lib/storage/session";

import userReducer from "./userSlice";
import likeReducer from "./likeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  like: likeReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
