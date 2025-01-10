import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/app";

export function PrivateRoute() {
    const user = useAppSelector(({ user }) => user);
    return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

export function PublicRoute() {
    const user = useAppSelector(({ user }) => user);
    return user ? <Navigate to="/profile" replace /> : <Outlet />;
}
