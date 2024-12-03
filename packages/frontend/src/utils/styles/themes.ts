const commonTheme = {
    fontFamily: "Arial, Helvetica, sans-serif",
    accent: "#bb86fc",
    accentDark: "#3700b3",
};

export const lightTheme = {
    ...commonTheme,
    primary: "#ffffff",
    secondary: "#f4f4f4",
    textPrimary: "#0d0d0d",
};

export const darkTheme = {
    ...commonTheme,
    primary: "#0a0f20",
    secondary: "#1a2130",
    textPrimary: "#EcEcEc",
};

export type Theme = typeof lightTheme;
