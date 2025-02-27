import styled from "styled-components";
import { motion } from "motion/react";
import { overlayStyles, buttonStyles } from "@/utils/styles";

export const Overlay = styled.div`
    ${overlayStyles}

    z-index: 11000;
    background-color: ${({ theme }) => theme.overlay};
    backdrop-filter: blur(2px);
`;

export const Modal = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 25px;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textPrimary};
    box-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
        box-shadow 0.25s ease-in-out;
    border-radius: 5px;
    max-width: 550px;
    width: 90%;

    svg {
        font-size: 90px;

        @media (max-width: 768px) {
            font-size: 70px;
        }
    }
`;

export const Title = styled.h1`
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const Text = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Button = styled.button<{ $padding?: string }>`
    ${buttonStyles}

    background-color: ${({ theme }) => theme.accent};

    &:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;
