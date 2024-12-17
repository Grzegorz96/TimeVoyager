import { GoogleOAuthButton } from "./GoogleAuth.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function GoogleAuth() {
    const handleGoogleAuth = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <GoogleOAuthButton onClick={handleGoogleAuth}>
            <FontAwesomeIcon icon={faGoogle} />
            Continue with Google
        </GoogleOAuthButton>
    );
}
