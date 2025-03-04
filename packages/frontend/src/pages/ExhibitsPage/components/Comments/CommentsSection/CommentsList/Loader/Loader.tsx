import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "./Loader.styles";
import { useTheme } from "styled-components";

export default function Loader() {
    const theme = useTheme();

    return (
        <LoaderWrapper>
            <ClipLoader color={theme.textPrimary} size={50} />
            Loading...
        </LoaderWrapper>
    );
}
