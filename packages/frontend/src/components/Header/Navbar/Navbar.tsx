import { Container } from "./Navbar.styles";
import { NavLink } from "@/components/ui";
import { pagesData } from "@/pages/ExhibitsPage";
import { capitalizeFirstLetter } from "@/utils/helpers";

export default function Navbar() {
    return (
        <Container>
            {pagesData.map(({ category }) => (
                <NavLink key={category} to={`exhibits/${category}`}>
                    {capitalizeFirstLetter(category)}
                </NavLink>
            ))}
        </Container>
    );
}
