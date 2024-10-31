import { NavbarContainer, StyledNavLink } from "./Navbar.styles";
import { navLinkData } from "@/utils/constants/navLinkData";
import { navLinkStyles } from "@/utils/styles/navLinkStyles";

export default function NavbarComponent() {
    return (
        <NavbarContainer>
            {navLinkData.map((navLink) => (
                <StyledNavLink
                    key={navLink.name}
                    to={navLink.path}
                    style={navLinkStyles}
                >
                    {navLink.name}
                </StyledNavLink>
            ))}
        </NavbarContainer>
    );
}
