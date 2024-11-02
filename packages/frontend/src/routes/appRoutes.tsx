import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
