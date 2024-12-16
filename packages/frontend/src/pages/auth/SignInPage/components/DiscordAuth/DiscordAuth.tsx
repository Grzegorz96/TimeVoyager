import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { DiscordOAuthButton } from "./DiscordAuth.styles";

export default function DiscordAuth() {
    const handleDiscordAuth = () => {
        window.location.href = "/api/auth/discord";
    };

    return (
        <DiscordOAuthButton onClick={handleDiscordAuth}>
            <FontAwesomeIcon icon={faDiscord} />
            Continue with Discord
        </DiscordOAuthButton>
    );
}
