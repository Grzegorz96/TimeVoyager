import { StyledAuthNavLink, UserAuthContainer } from "./UserAuth.styles";
import { navLinkStyles } from "@/utils/styles/navLinkStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function UserAuthComponent() {
    return (
        <UserAuthContainer>
            <StyledAuthNavLink to="/login" style={navLinkStyles}>
                <FontAwesomeIcon icon={faRightToBracket} />
                Sign in
            </StyledAuthNavLink>
            <StyledAuthNavLink to="/register" style={navLinkStyles}>
                <FontAwesomeIcon icon={faUserPlus} />
                Sign up
            </StyledAuthNavLink>
        </UserAuthContainer>
    );
}
