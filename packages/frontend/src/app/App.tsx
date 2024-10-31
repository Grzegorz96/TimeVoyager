import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/utils/styles/globalStyles";
import { lightTheme, darkTheme } from "@/utils/styles/themes";
import { useAppSelector } from "@/app/store";

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
