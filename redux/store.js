import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile";
import { rateMyCreativeApi } from "../services/api";

export default configureStore({
  reducer: {
    profile: profileReducer,
    // Add the generated reducer as a specific top-level slice
    [rateMyCreativeApi.reducerPath]: rateMyCreativeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rateMyCreativeApi.middleware),
});
