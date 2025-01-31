import { LoadingScreenContainer } from "./LoadingScreen.styles";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";

export default function LoadingScreen() {
    const theme = useTheme();

    return (
        <LoadingScreenContainer>
            <BarLoader color={theme.textPrimary} width={300} height={10} />
            Loading...
        </LoadingScreenContainer>
    );
}
