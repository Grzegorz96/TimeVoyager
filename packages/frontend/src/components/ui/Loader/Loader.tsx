import { ClipLoader } from "react-spinners";
import { Container, Text } from "./Loader.styles";
import { useTheme } from "styled-components";

export default function Loader() {
    const theme = useTheme();

    return (
        <Container>
            <ClipLoader color={theme.textPrimary} size={50} />
            <Text>Loading...</Text>
        </Container>
    );
}
