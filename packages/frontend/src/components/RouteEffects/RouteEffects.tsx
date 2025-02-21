import { useLayoutEffect } from "react";
import { GradientWrapper } from "./RouteEffects.styles";
import { useLocation } from "react-router-dom";

export default function RouteEffects({ children }: RouteEffectProps) {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        document.body.scrollTo({ top: 0 });
    }, [pathname]);

    return <GradientWrapper $pathname={pathname}>{children}</GradientWrapper>;
}

type RouteEffectProps = {
    children: React.ReactNode;
};
