const commonTheme = {
    fontFamily: "Arial, Helvetica, sans-serif",
    accent: "#bb86fc",
    accentDark: "#3700b3",
    textError: "#ff4d4d",
    overlay: "rgba(0, 0, 0, 0.5)",
    backgroundFocus: "rgba(0, 0, 0, 0.3)",
};

export const lightTheme = {
    ...commonTheme,
    primary: "#ffffff",
    secondary: "#e0e0e0",
    textPrimary: "#000000",
    textSecondary: "#333333",
    gradients: {
        "/": "radial-gradient(ellipse 100% 100% at 100% 100%, #ffcc80, #ffeb3b00)",
        "/sign-in":
            "radial-gradient(ellipse 40% 100% at 60% -10%, rgba(255, 183, 77, 0.3), rgba(255, 183, 77, 0))",
        "/sign-up":
            "radial-gradient(ellipse 40% 100% at 60% -10%, rgba(255, 183, 77, 0.3), rgba(255, 183, 77, 0))",
        // "/architecture":
        //     "radial-gradient(ellipse 40% 100% at 60% -10%, rgba(255, 183, 77, 0.3), rgba(255, 183, 77, 0))",
    },
};

export const darkTheme = {
    ...commonTheme,
    primary: "#0a0f20",
    secondary: "#1a2130",
    textPrimary: "#EcEcEc",
    textSecondary: "#b3b3b3",
    gradients: {
        "/": "radial-gradient(ellipse 100% 100% at 100% 100%, #c870da42, #e877af00)",
        "/sign-in":
            "radial-gradient(ellipse 40% 100% at 60% -10%, rgba(119, 138, 232, 0.3), rgba(119, 138, 232, 0))",
        "/sign-up":
            "radial-gradient(ellipse 40% 100% at 60% -10%, rgba(119, 138, 232, 0.3), rgba(119, 138, 232, 0))",
        // "/architecture":
        //     "radial-gradient(ellipse 40% 100% at -10% 50%, rgba(50, 58, 97, 0.3), rgba(119, 138, 232, 0))",
    },
};

export type Theme = typeof lightTheme;
