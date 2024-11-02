import { NavbarContainer, StyledNavLink } from "./Navbar.styles";
import { navLinkData } from "@/utils/constants";
import { navLinkStyles } from "@/utils/styles";

export default function Navbar() {
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
