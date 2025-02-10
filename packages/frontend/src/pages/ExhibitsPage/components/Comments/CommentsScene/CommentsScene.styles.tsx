import styled from "styled-components";

export const SceneContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.textPrimary};
`;
