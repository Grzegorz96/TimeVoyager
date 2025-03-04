import styled from "styled-components";

export const Container = styled.div`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    overflow: hidden;
`;

export const UpperTitle = styled.span`
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
