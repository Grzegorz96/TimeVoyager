import styled, { css } from "styled-components";
import { NavLink as NL } from "react-router-dom";

export const sharedNavLinkStyles = css<{ $padding?: string }>`
    text-decoration: none;
    padding: ${({ $padding }) => $padding || "6px"};
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
    cursor: pointer;
    border: none;

    @media (max-width: 1500px) {
        font-size: 0.9rem;
    }

    svg {
        font-size: 1.5rem;
    }

    &:hover {
        background-position: 100% 0;
    }
`;

export const NavLink = styled(NL)<{ $padding?: string }>`
    ${sharedNavLinkStyles}

    &.active {
        box-shadow: 0 0 15px ${({ theme }) => `${theme.textPrimary}90`};
    }
`;
