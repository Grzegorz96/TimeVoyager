import styled from "styled-components";

export const GearButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    padding: 2px;

    svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.textPrimary};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 5px;
    position: absolute;
    top: 80px;
    right: 20px;
    padding: 10px;
    width: 150px;
    height: 200px;
    border: 1px solid ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.secondary};
    z-index: 1;
`;

export const ToogleThemeButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.textPrimary};
    padding: 5px;
    border-radius: 5px;
`;
