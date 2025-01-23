import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { GradientWrapper } from "./MainLayout.styles";

export default function MainLayout() {
    const { pathname } = useLocation();

    return (
        <GradientWrapper $pathname={pathname}>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </GradientWrapper>
    );
}
