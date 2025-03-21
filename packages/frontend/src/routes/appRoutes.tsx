import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import { SignInPage, SignUpPage } from "@/pages/auth";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ExhibitsPage, { Comments, ReadMore } from "@/pages/ExhibitsPage";
import { PublicRoute, PrivateRoute } from "./RouteHandler";
import {
    getExhibitsPageConfig,
    getReadMoreConfig,
    getCommentsConfig,
} from "./loaders";

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
        path: "exhibits/:exhibitsCategory",
        loader: getExhibitsPageConfig,
        element: <ExhibitsPage />,

        children: [
            {
                path: "comments/:exhibitId",
                loader: getCommentsConfig,
                element: <Comments />,
            },
            {
                path: "read-more/:exhibitId",
                loader: getReadMoreConfig,
                element: <ReadMore />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
