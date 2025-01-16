import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { PublicRoute, PrivateRoute } from "./RouteHandler";

export const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "sign-in",
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <SignInPage />,
            },
        ],
    },
    {
        path: "sign-up",
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <SignUpPage />,
            },
        ],
    },
    {
        path: "profile",
        element: <PrivateRoute />,
        children: [
            {
                index: true,
                element: <ProfilePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
