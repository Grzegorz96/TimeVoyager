import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { GradientWrapper } from "./MainLayout.styles";
import { useLayoutEffect } from "react";

export default function MainLayout() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

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
