import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/utils/styles";
import { lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector } from "@/app";
import ErrorModal from "@/components/ui/ErrorModal";

function App() {
    const isDarkMode = useAppSelector(({ themeData }) => themeData.isDarkMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <ErrorModal />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
