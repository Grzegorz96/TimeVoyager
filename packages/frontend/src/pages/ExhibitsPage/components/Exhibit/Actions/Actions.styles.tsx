import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { buttonStyles } from "@/utils/styles";

export const Container = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    align-items: center;
`;

export const sharedActionsStyles = css<{
    $padding?: string;
    $width?: string;
    $iconOnly?: boolean;
    $isLikedByUser?: boolean;
}>`
    ${buttonStyles}

    background-color: ${({ theme, $iconOnly }) =>
        $iconOnly ? "transparent" : theme.accent};
    width: ${({ $width }) => $width};

    &:hover {
        background-color: ${({ theme, $iconOnly }) =>
            $iconOnly ? "transparent" : theme.accentDark};

        svg {
            color: ${({ theme, $isLikedByUser }) =>
                $isLikedByUser ? theme.textPrimary : theme.accentDark};
            transform: scale(1.1);
        }
    }

    svg {
        font-size: 2rem;
        transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
    }
`;

export const LikeButton = styled.button<{
    $padding?: string;
    $iconOnly?: boolean;
    $isLikedByUser?: boolean;
}>`
    ${sharedActionsStyles}

    color: ${({ theme, $isLikedByUser }) => $isLikedByUser && theme.textError};

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export const ActionLink = styled(Link)<{
    $padding?: string;
    $iconOnly?: boolean;
    $width?: string;
}>`
    ${sharedActionsStyles}
`;

export const Counter = styled.span`
    font-size: 1.2rem;
`;
