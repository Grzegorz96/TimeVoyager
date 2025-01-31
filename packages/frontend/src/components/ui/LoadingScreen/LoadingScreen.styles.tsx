import styled from "styled-components";

export const LoadingScreenContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
`;
