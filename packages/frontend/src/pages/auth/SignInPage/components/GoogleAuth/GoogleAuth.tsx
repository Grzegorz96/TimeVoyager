import { GoogleOAuthButton } from "./GoogleAuth.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function GoogleAuth() {
    return (
        <GoogleOAuthButton>
            <FontAwesomeIcon icon={faGoogle} />
            Continue with Google
        </GoogleOAuthButton>
    );
}
