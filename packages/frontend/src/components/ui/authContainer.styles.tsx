import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
    display: flex;
    height: 600px;
    width: 100%;
    max-width: 900px;
    border: 2px solid ${({ theme }) => theme.textPrimary};
    border-radius: 15px;
    overflow: hidden;
`;

export const LeftSide = styled.div`
    flex: 1;
    background-image: url("/src/assets/images/logintheme.jpg");
    background-size: cover;
    background-position: center;
    height: 100%;
`;

export const RightSide = styled.div`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 15px;
`;

export const Heading = styled.h1`
    color: ${({ theme }) => theme.textPrimary};
    font-size: 3rem;
`;

export const Description = styled.p<{ $size?: string }>`
    color: ${({ theme }) => theme.textPrimary};
    font-size: ${({ $size }) => $size || "1.2rem"};
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.textPrimary};
`;
