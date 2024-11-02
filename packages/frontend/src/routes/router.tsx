import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts";
import { appRoutes } from "./appRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: appRoutes,
    },
]);
