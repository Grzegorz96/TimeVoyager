import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/utils/styles";
import { lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector } from "@/app";

function App() {
    const isDarkMode: boolean = useAppSelector(
        ({ themeData }) => themeData.isDarkMode
    );

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
