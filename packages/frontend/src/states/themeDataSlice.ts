import { createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const getInitialThemeMode = (): boolean => {
    const storedIsDarkMode: string | null = localStorage.getItem("isDarkMode");

    if (storedIsDarkMode === null) {
        const preference: boolean = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        localStorage.setItem("isDarkMode", JSON.stringify(preference));
        return preference;
    }

    try {
        return z.boolean().parse(JSON.parse(storedIsDarkMode));
    } catch (error) {
        console.error("Error parsing isDarkMode:", error);
        localStorage.setItem("isDarkMode", JSON.stringify(false));
        return false;
    }
};

const initialState = {
    isDarkMode: getInitialThemeMode(),
};

const themeDataSlice = createSlice({
    name: "themeData",
    initialState,
    reducers: {
        toggleThemeMode(state) {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleThemeMode } = themeDataSlice.actions;
export default themeDataSlice.reducer;
