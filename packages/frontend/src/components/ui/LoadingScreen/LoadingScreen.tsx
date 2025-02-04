import { LoadingScreenContainer, Text } from "./LoadingScreen.styles";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";

export default function LoadingScreen() {
    const theme = useTheme();

    return (
        <LoadingScreenContainer>
            <BarLoader color={theme.accent} width={300} height={10} />
            <Text>Loading...</Text>
        </LoadingScreenContainer>
    );
}
