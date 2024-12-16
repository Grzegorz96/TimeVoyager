import styled from "styled-components";

export const ErrorContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    max-height: 300px;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.textColor};
    box-shadow: 0px 0px 16px ${({ theme }) => theme.shadowColor};
    gap: 10px;
    padding: 30px;
`;

export const ErrorMessage = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
`;
