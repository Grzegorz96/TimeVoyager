const commonTheme = {
    fontFamily: "Arial, Helvetica, sans-serif",
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
    secondary: "#1e1e1e",
    textPrimary: "#EcEcEc",
};

export type Theme = typeof lightTheme;
