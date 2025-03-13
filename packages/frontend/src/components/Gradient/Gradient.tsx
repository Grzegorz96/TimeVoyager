import { Container } from "./Gradient.styles";
import { useLocation } from "react-router-dom";

export default function Gradient({ children }: GradientProps) {
    const { pathname } = useLocation();

    return <Container $pathname={pathname}>{children}</Container>;
}

type GradientProps = {
    children: React.ReactNode;
};
