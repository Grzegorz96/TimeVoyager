import { useLocation } from "react-router-dom";
import { ErrorContainer, ErrorMessage } from "./ErrorPage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const error = params.get("error");

    return (
        <ErrorContainer>
            <FontAwesomeIcon icon={faCircleExclamation} size="3x" />
            <h1>Error</h1>
            <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
    );
}
