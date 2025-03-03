import styled from "styled-components";
import { overlayStyles } from "@/utils/styles";

export const Overlay = styled.div`
    ${overlayStyles}

    background-color: ${({ theme }) => theme.overlay};
    backdrop-filter: blur(2px);
`;

export const Container = styled.div`
    height: 70%;
    width: 90%;
    max-width: 1200px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    box-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    display: flex;
    gap: 10px;
    background-image: ${({ theme }) => theme.gradients.comments};
`;
