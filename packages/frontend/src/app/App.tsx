import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector } from "@/app";
import ErrorModal from "@/components/ui/ErrorModal";
import { useGetStatusQuery } from "@/services/api";
import Loader from "@/components/ui/Loader";

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
