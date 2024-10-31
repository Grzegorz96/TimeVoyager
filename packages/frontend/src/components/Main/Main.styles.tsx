import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    min-height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
`;
