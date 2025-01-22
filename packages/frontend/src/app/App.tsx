import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector, useAppDispatch } from "@/app";
import { NotificationModal, Loader, Toaster } from "@/components/ui";
import { useEffect } from "react";
import { getAuthStatus } from "@/states/authSlice";

function App() {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);
    const isLoading = useAppSelector(({ auth }) => auth.isLoading);

    // useEffect(() => {
    //     dispatch(getAuthStatus());
    // }, []);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <NotificationModal />
            <Toaster />
            {0 ? <Loader /> : <RouterProvider router={router} />}
        </ThemeProvider>
    );
}

export default App;
