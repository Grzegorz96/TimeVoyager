import { css } from "styled-components";

export const buttonStyles = css<{ $padding?: string }>`
    padding: ${({ $padding }) => $padding || "10px 20px"};
    color: ${({ theme }) => theme.textPrimary};
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    text-decoration: none;
    text-align: center;

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.textPrimary};
    }
`;
