import { Container } from "./Navbar.styles";
import { NavLink } from "@/components/ui";
import { pagesData } from "@/pages/ExhibitsPage";
import { capitalizeFirstLetter } from "@/utils/helpers";

export default function Navbar() {
    return (
        <Container>
            {pagesData.map(({ path }) => (
                <NavLink key={path} to={`exhibits/${path}`}>
                    {capitalizeFirstLetter(path)}
                </NavLink>
            ))}
        </Container>
    );
}
