import styled from "styled-components";
import { overlayStyles } from "@/utils/styles";

export const Container = styled.div`
    ${overlayStyles}

    background: linear-gradient(
        to bottom,
        transparent 80px,
        ${({ theme }) => theme.primary} 80px
    );
`;

export const ProgressBar = styled.div`
    width: 300px;
    height: 10px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 5px;
    overflow: hidden;

    .bar {
        height: 100%;
        background: ${({ theme }) => theme.accent};
    }
`;

export const ProgressText = styled.div`
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.2rem;
`;
