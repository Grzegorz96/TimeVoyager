import styled from "styled-components";

export const ExhibitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const IntroSection = styled.div`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    padding: 20px;
`;

export const Heading = styled.h1`
    font-family: inherit;
    font-size: 3rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textPrimary};
    text-transform: uppercase;
    text-align: center;
`;

export const MainDescription = styled.p`
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textPrimary};
    text-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    max-width: 800px;
    margin-top: 10px;
    text-align: center;
`;
