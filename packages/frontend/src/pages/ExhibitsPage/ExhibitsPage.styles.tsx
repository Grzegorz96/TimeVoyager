import styled from "styled-components";

export const ExhibitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ExhibitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 400px;
    margin-top: 100px;
`;

export const ExhibitCard = styled.div<{ $reverse?: boolean }>`
    display: flex;
    gap: 20px;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    justify-content: space-around;
    align-items: center;
`;

export const ContentContainer = styled.div<{ $reverse?: boolean }>`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;

export const UpperTitle = styled.span`
    font-family: inherit;
    color: ${({ theme }) => theme.accent};
    font-size: 0.875rem;
    letter-spacing: 4px;
    line-height: 1.4;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Title = styled.h2`
    font-family: inherit;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textPrimary};
`;

export const ShortDescription = styled.p`
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textPrimary};
    margin-top: 10px;
    text-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    max-width: 800px;
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
