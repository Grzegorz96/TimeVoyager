import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 6px;
    color: ${({ theme }) => theme.textPrimary};
    border-radius: 5px;
    text-align: center;
    background: linear-gradient(
        120deg,
        ${({ theme }) => theme.accent},
        ${({ theme }) => theme.accentDark}
    );
    background-size: 200% 200%;
    transition: background-position 0.5s ease, box-shadow 0.3s ease;

    @media (max-width: 1500px) {
        font-size: 0.9rem;
        padding: 4px;
    }

    &:hover {
        background-position: 100% 0;
    }
`;
