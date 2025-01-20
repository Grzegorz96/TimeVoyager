import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ArchitecturePage from "@/pages/ArchitecturePage";
import { PublicRoute, PrivateRoute } from "./RouteHandler";

export const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        element: <PublicRoute />,
        children: [
            {
                path: "sign-in",
                element: <SignInPage />,
            },
            {
                path: "sign-up",
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
        path: "architecture",
        element: <ArchitecturePage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
