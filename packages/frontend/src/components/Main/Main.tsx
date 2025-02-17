import { Container } from "./Main.styles";

export default function Main({ children }: MainProps): JSX.Element {
    return <Container>{children}</Container>;
}

type MainProps = {
    children: React.ReactNode;
};
