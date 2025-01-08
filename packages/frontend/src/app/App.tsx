import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector } from "@/app";
import { ErrorModal, Loader } from "@/components/ui";
import { useGetStatusQuery } from "@/services/api";

function App() {
    const isDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);
    const { isLoading } = useGetStatusQuery();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <ErrorModal />
            {isLoading ? <Loader /> : <RouterProvider router={router} />}
        </ThemeProvider>
    );
}

export default App;
