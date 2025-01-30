import styled from "styled-components";

export const ActionsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    /* border: 1px solid ${({ theme }) => theme.accent}; */
`;

export const ActionButton = styled.button<{
    $padding?: string;
    $width?: string;
    $iconOnly?: boolean;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, $iconOnly }) =>
        $iconOnly ? "transparent" : theme.accent};
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1rem;
    font-weight: 600;
    padding: ${({ $padding }) => $padding};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
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
