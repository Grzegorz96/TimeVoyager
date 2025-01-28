import { NavbarContainer } from "./Navbar.styles";
import { NavLink } from "@/components/ui";
import { pagesData } from "@/pages/ExhibitsPage";
import { capitalizeFirstLetter } from "@/utils/helpers";

export default function Navbar() {
    return (
        <NavbarContainer>
            {pagesData.map(({ path }) => (
                <NavLink key={path} to={path}>
                    {capitalizeFirstLetter(path)}
                </NavLink>
            ))}
        </NavbarContainer>
    );
}
