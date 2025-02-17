import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 0px 40px 5px ${({ theme }) => theme.primary};
    max-width: 350px;
    width: 100%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Input = styled.input`
    padding: 0.8rem 1.2rem;
    border: 2px solid ${({ theme }) => theme.secondary}; /* Kolor krawędzi */
    border-radius: 5px;
    background-color: ${({ theme }) =>
        theme.primary}; /* Jaśniejszy kolor tła */
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1rem;
    transition: border 0.3s ease, box-shadow 0.3s ease; /* Efekt płynnej zmiany stylu */

    &:focus {
        border-color: ${({ theme }) =>
            theme.accent}; /* Kolor krawędzi po focusie */
        box-shadow: 0 0 8px ${({ theme }) => theme.accent}; /* Efekt podświetlenia */
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.textSecondary}; /* Kolor placeholdera */
    }

    @media (max-width: 768px) {
        font-size: 0.9rem; /* Mniejsze fonty na mniejszych ekranach */
    }
`;

export const InputLabel = styled.label`
    position: absolute;
    left: 1.3rem;
    top: 0.9rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    transition: 0.3s all ease;
    pointer-events: none;
    background-color: ${({ theme }) => theme.primary};

    ${Input}:focus ~ &,
    ${Input}:not(:placeholder-shown) ~ & {
        top: -0.45rem;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.textPrimary};
    }
`;

export const Submit = styled.button`
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textPrimary};
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: ${({ theme }) => theme.accent};
        cursor: not-allowed;
    }

    &:hover {
        background-color: ${({ theme }) =>
            theme.accentDark}; /* Zmiana koloru przy hoverze */
    }

    &:active {
        background-color: ${({ theme }) =>
            theme.accentDarker}; /* Kolor po kliknięciu */
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 68px;
    position: relative;
`;

export const TextError = styled.p`
    color: ${({ theme }) => theme.textError};
    font-size: 0.7rem;
    text-align: center;
`;

export const RootTextError = styled(TextError)`
    position: absolute;
    top: 100%;
    margin-top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const SubmitWrapper = styled.div`
    position: relative;
`;
