import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
`;

export const Input = styled.textarea`
    width: 100%;
    max-height: 80px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    resize: none;
    overflow-y: auto;
    field-sizing: content;
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.primary};
`;

export const Submit = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textPrimary};

    transition: opacity 0.3s;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;
