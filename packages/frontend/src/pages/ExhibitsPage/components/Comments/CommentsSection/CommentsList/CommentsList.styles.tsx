import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100%;
    background-color: ${({ theme }) => `${theme.primary}60`};
    border-radius: 5px;
`;

export const ErrorText = styled.p`
    font-weight: bold;
    margin: "auto";
`;
