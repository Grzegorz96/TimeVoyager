import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/states/themeSlice";
import errorReducer from "@/states/errorSlice";
import userReducer from "@/states/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setThemeInLocalStorage } from "@/middlewares";
import { authApi } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        error: errorReducer,
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(setThemeInLocalStorage)
            .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
