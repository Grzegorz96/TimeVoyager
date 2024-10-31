import { configureStore } from "@reduxjs/toolkit";
import themeDataReducer from "../states/themeDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMiddleware } from "../middleware/toggleThemeMiddleware";

const store = configureStore({
    reducer: {
        themeData: themeDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(toggleThemeMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
