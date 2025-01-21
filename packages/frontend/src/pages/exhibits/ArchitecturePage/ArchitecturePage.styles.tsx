import styled from "styled-components";

export const CanvasContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${({ theme }) => theme.secondary};
    flex-shrink: 0;
`;

export const ModelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid white;
`;

export const ModelCard = styled.div<{ $reverse?: boolean }>`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
`;

export const Decription = styled.div`
    /* width: 400px; */
    height: 100%;
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid white;
`;
