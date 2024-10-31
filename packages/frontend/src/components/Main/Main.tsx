import { MainContainer } from "./Main.styles";

export default function MainComponent({
    children,
}: MainComponentProps): JSX.Element {
    return <MainContainer>{children}</MainContainer>;
}

type MainComponentProps = {
    children: React.ReactNode;
};
