import { MainContainer } from "./Main.styles";

export default function Main({ children }: MainProps): JSX.Element {
    return <MainContainer>{children}</MainContainer>;
}

type MainProps = {
    children: React.ReactNode;
};
