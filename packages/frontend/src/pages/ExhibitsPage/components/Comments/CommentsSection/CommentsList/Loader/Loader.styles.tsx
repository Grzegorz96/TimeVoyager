import styled from "styled-components";

export const LoaderWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.textPrimary};
`;
