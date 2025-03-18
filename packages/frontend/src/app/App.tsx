import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/styles";
import { useAppSelector, useAppDispatch } from "@/app";
import NotificationModal from "@/components/NotificationModal";
import LoadingScreen from "@/components/LoadingScreen";
import Toaster from "@/components/Toaster";
import { useEffect } from "react";
import { getAuthStatus } from "@/states/authSlice";
import { AnimatePresence } from "motion/react";
import ScrollLockControl from "@/components/ScrollLockControl";

function App() {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);
    const isLoading = useAppSelector(({ auth }) => auth.isLoading);
    const notification = useAppSelector(({ notification }) => notification);

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <AnimatePresence>
                {notification && (
                    <NotificationModal notification={notification} />
                )}
            </AnimatePresence>
            <Toaster />
            <ScrollLockControl />
            {0 ? <LoadingScreen /> : <RouterProvider router={router} />}
        </ThemeProvider>
    );
}

export default App;
