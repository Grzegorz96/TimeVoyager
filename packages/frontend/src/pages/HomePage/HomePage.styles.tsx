import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonStyles } from "@/utils/styles";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    min-height: 100vh;
    text-align: center;
`;

export const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textPrimary};
`;

export const SubHeading = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textSecondary};
    text-align: center;
    margin-bottom: 30px;
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    max-width: 800px;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.textPrimary};
    text-align: left;
    margin-bottom: 40px;
    & li {
        margin-bottom: 10px;
    }
`;

export const Button = styled(Link)<{ $padding?: string }>`
    ${buttonStyles}

    background-color: ${({ theme }) => theme.accent};

    &:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;
