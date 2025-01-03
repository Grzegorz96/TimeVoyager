import styled from "styled-components";
import { motion } from "motion/react";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.overlay};
    z-index: 9999;
    overflow: hidden;
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
        color: #f27474;

        @media (max-width: 768px) {
            font-size: 70px;
        }
    }
`;

export const ModalTitle = styled.h1`
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const ModalText = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ModalButton = styled.button`
    z-index: 50;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;

    &:focus {
        outline: 3px solid #7066e099;
    }

    &:hover {
        background-color: #655cc9;
    }
`;
