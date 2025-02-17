import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textPrimary};
`;
