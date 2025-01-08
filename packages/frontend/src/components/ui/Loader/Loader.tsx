import { LoaderContainer } from "./Loader.styles";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";

export default function Loader() {
    const theme = useTheme();

    return (
        <LoaderContainer>
            <BarLoader color={theme.textPrimary} width={300} height={10} />
            Loading...
        </LoaderContainer>
    );
}
