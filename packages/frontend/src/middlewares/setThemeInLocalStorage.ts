import { Middleware } from "@reduxjs/toolkit";
import { toggleThemeMode } from "@/states/themeSlice";

export const setThemeInLocalStorage: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);

        if (toggleThemeMode.match(action)) {
            localStorage.setItem(
                "isDarkMode",
                JSON.stringify(store.getState().theme.isDarkMode)
            );
        }

        return result;
    };
