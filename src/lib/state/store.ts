import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { baseApiService } from "./base-api-service";

/**
 * A helper function that determines if the app is running in production mode
 * based on the value of the NODE_ENV environment variable.
 *
 * @returns {boolean} True if the app is running in production mode, false otherwise.
 */
const isProduction = () => process.env.NODE_ENV === "production";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApiService.reducerPath]: baseApiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApiService.middleware),
    devTools: !isProduction(),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
