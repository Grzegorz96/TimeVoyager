import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/states/themeSlice";
import notificationReducer from "@/states/notificationSlice";
import authReducer from "@/states/authSlice";
import scrollReducer from "@/states/scrollSlice";
import { useDispatch, useSelector } from "react-redux";
import { setThemeInLocalStorage } from "@/middlewares";
import { apiSlice } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        notification: notificationReducer,
        auth: authReducer,
        scroll: scrollReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(setThemeInLocalStorage)
            .concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
