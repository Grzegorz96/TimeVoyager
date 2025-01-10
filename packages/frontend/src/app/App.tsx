import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector } from "@/app";
import { NotificationModal, Loader } from "@/components/ui";
import { useGetStatusQuery } from "@/services/api";
import { CustomToaster } from "@/components/ui";

function App() {
    const isDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);
    const { isLoading } = useGetStatusQuery();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <NotificationModal />
            <CustomToaster />
            {isLoading ? <Loader /> : <RouterProvider router={router} />}
        </ThemeProvider>
    );
}

export default App;
