import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import { SignInPage, SignUpPage } from "@/pages/auth";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ArchitecturePage, PrehistoryPage } from "@/pages/exhibits";
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
        path: "prehistory",
        element: <PrehistoryPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
