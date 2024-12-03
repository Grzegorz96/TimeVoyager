import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserAuthContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const StyledAuthNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 8px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 6px;

    &:hover {
        background-position: 100% 0;
    }
    svg {
        font-size: 1.5rem;
    }
`;
