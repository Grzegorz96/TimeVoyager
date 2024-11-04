import { StyledAuthNavLink, UserAuthContainer } from "./UserAuth.styles";
import { navLinkStyles } from "@/utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function UserAuth() {
    return (
        <UserAuthContainer>
            <StyledAuthNavLink to="/sign-in" style={navLinkStyles}>
                <FontAwesomeIcon icon={faRightToBracket} />
                Sign in
            </StyledAuthNavLink>
            <StyledAuthNavLink to="/sign-up" style={navLinkStyles}>
                <FontAwesomeIcon icon={faUserPlus} />
                Sign up
            </StyledAuthNavLink>
        </UserAuthContainer>
    );
}
