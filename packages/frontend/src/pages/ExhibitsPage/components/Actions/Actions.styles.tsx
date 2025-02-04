import styled from "styled-components";
import { buttonStyles } from "@/utils/styles";

export const ActionsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export const ActionButton = styled.button<{
    $padding?: string;
    $width?: string;
    $iconOnly?: boolean;
}>`
    ${buttonStyles}

    background-color: ${({ theme, $iconOnly }) =>
        $iconOnly ? "transparent" : theme.accent};
    width: ${({ $width }) => $width};

    &:hover {
        background-color: ${({ theme, $iconOnly }) =>
            $iconOnly ? "transparent" : theme.accentDark};

        svg {
            color: ${({ theme }) => theme.accentDark};
            transform: scale(1.1);
        }
    }

    svg {
        font-size: 2rem;
        transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
    }
`;
