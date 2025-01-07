import { QuestMenuContainer } from "./QuestMenu.styles";
import { navLinkStyles, StyledNavLink } from "@/utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function QuestMenu() {
    return (
        <QuestMenuContainer>
            <StyledNavLink to="/sign-in" style={navLinkStyles} $padding="8px">
                <FontAwesomeIcon icon={faRightToBracket} />
                Sign in
            </StyledNavLink>
            <StyledNavLink to="/sign-up" style={navLinkStyles} $padding="8px">
                <FontAwesomeIcon icon={faUserPlus} />
                Sign up
            </StyledNavLink>
        </QuestMenuContainer>
    );
}
