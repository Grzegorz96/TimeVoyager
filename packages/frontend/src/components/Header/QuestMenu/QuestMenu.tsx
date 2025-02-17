import { Container } from "./QuestMenu.styles";
import { NavLink } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function QuestMenu() {
    return (
        <Container>
            <NavLink to="/sign-in" $padding="8px">
                <FontAwesomeIcon icon={faRightToBracket} />
                Sign in
            </NavLink>
            <NavLink to="/sign-up" $padding="8px">
                <FontAwesomeIcon icon={faUserPlus} />
                Sign up
            </NavLink>
        </Container>
    );
}
