import { NavbarContainer } from "./Navbar.styles";
import { navLinkData } from "@/utils/constants";
import { NavLink } from "@/components/ui";

export default function Navbar() {
    return (
        <NavbarContainer>
            {navLinkData.map((navLink) => (
                <NavLink key={navLink.name} to={navLink.path}>
                    {navLink.name}
                </NavLink>
            ))}
        </NavbarContainer>
    );
}
