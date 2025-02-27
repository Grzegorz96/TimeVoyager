import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow: hidden;
`;

export const UpperTitle = styled.span`
    margin-top: 5px;
    font-family: inherit;
    color: ${({ theme }) => theme.accent};
    font-size: 0.875rem;
    letter-spacing: 4px;
    font-weight: 600;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h2`
    font-family: inherit;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 900;
    width: 100%;
    text-align: center;
`;

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
    gap: 10px;
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => `${theme.primary}60`};
    border-radius: 5px;
`;

export const TextField = styled.p<{ $fontWeight?: string }>`
    font-weight: ${({ $fontWeight }) => $fontWeight};
`;

export const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-block: 5px;
`;

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-block: 5px;
`;

export const LikeButton = styled.button`
    padding: 2px;
    cursor: pointer;
    color: ${({ theme }) => theme.textPrimary};
    background-color: transparent;
    border: none;
    font-size: 1rem;
`;

export const BottomElement = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
`;

export const Reply = styled.button`
    font-size: 0.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
    cursor: pointer;
    background-color: transparent;
    border: none;
`;

export const Form = styled.form`
    display: flex;
    gap: 10px;
    padding: 10px;
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
