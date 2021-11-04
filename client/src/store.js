import { configureStore } from "@reduxjs/toolkit";

import { persistedReducer } from "./features/index";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
