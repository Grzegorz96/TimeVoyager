import { HeaderContainer, StyledLink, StyledLogo } from "./Header.styles";
import NavbarComponent from "../Navbar/Navbar";
import SettingsGearComponent from "../SettingsGear/SettingsGear";
import UserAuthComponent from "../UserAuth/UserAuth";

export default function HeaderComponent() {
    return (
        <HeaderContainer>
            <StyledLink to="/">
                <StyledLogo />
            </StyledLink>
            <NavbarComponent />
            <UserAuthComponent />
            <SettingsGearComponent />
        </HeaderContainer>
    );
}
