import styled from "styled-components";
import { overlayStyles, buttonStyles } from "@/utils/styles";

export const Overlay = styled.div`
    ${overlayStyles}

    background-color: ${({ theme }) => theme.overlay};
    backdrop-filter: blur(2px);
`;

export const Container = styled.div`
    height: 90%;
    width: 90%;
    max-width: 800px;
    padding: 20px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    box-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({ theme }) => theme.gradients.readMore};
`;

export const LongDescription = styled.p`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    font-size: 1.2rem;
    text-align: justify;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-clip: content-box;
        border-left: 10px solid transparent;
        background-color: ${({ theme }) => theme.accent};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;

export const ScrollContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 20px;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.accent};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;

export const Image = styled.img`
    width: 300px;
    aspect-ratio: 6/8;
    object-fit: cover;
    border-radius: 10px;
`;

export const Button = styled.button<{ $padding?: string }>`
    ${buttonStyles}

    background-color: ${({ theme }) => theme.accent};

    &:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;
