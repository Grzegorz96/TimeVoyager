import styled from "styled-components";

export const DiscordOAuthButton = styled.button`
    background-color: #7289da;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    padding: 10px;
    color: ${({ theme }) => theme.textPrimary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    max-width: 300px;
    width: 100%;

    svg {
        font-size: 1.2rem;
    }
`;
