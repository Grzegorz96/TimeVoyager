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
    secondary: "#f4f4f4",
    textPrimary: "#0d0d0d",
    textSecondary: "#4d4d4d",
};

export const darkTheme = {
    ...commonTheme,
    primary: "#0a0f20",
    secondary: "#1a2130",
    textPrimary: "#EcEcEc",
    textSecondary: "#b3b3b3",
};

export type Theme = typeof lightTheme;
