import { Middleware } from "@reduxjs/toolkit";
import { toggleThemeMode } from "@/states/themeSlice";

export const setThemeInLocalStorage: Middleware =
    (api) => (next) => (action) => {
        const result = next(action);

        if (toggleThemeMode.match(action)) {
            localStorage.setItem(
                "isDarkMode",
                JSON.stringify(api.getState().theme.isDarkMode)
            );
        }

        return result;
    };
