import styled from "styled-components";

export const LoaderContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
`;
