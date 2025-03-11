import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.textPrimary};
`;

export const Text = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textPrimary};
`;
