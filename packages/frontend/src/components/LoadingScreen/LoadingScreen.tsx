import { Container, Text } from "./LoadingScreen.styles";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { useScrollLockControl } from "@/hooks";

export default function LoadingScreen() {
    useScrollLockControl();
    const theme = useTheme();

    return (
        <Container>
            <BarLoader color={theme.accent} width={300} height={10} />
            <Text>Loading...</Text>
        </Container>
    );
}
