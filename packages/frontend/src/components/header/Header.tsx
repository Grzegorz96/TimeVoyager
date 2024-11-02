import { HeaderContainer, StyledLink, StyledLogo } from "./Header.styles";
import Navbar from "./Navbar";
import SettingsGear from "./SettingsGear";
import UserAuth from "./UserAuth";

export default function Header() {
    return (
        <HeaderContainer>
            <StyledLink to="/">
                <StyledLogo />
            </StyledLink>
            <Navbar />
            <UserAuth />
            <SettingsGear />
        </HeaderContainer>
    );
}
