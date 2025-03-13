import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Gradient from "@/components/Gradient";

export default function MainLayout() {
    return (
        <Gradient>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
            <ScrollRestoration />
        </Gradient>
    );
}
