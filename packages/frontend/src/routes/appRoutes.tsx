import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import NotFoundPage from "@/pages/NotFound";

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
