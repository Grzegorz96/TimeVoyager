import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import RouteEffects from "@/components/RouteEffects";

export default function MainLayout() {
    return (
        <RouteEffects>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </RouteEffects>
    );
}
