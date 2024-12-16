import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ErrorPage from "@/pages/ErrorPage";

export const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "sign-in",
        element: <SignInPage />,
    },
    {
        path: "sign-up",
        element: <SignUpPage />,
    },
    {
        path: "error",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
