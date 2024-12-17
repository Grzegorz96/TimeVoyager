import { configureStore } from "@reduxjs/toolkit";
import themeDataReducer from "../states/themeDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMiddleware } from "../middlewares";
import { authApi } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { set } from "zod";

export const store = configureStore({
    reducer: {
        themeData: themeDataReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(toggleThemeMiddleware)
            .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
