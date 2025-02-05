import styled from "styled-components";

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

const ImageContainer = styled.div`
    margin-bottom: 300px;
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-inline: auto;
`;

export const ImageContainer1 = styled(ImageContainer)`
    &:hover {
        img:nth-child(1) {
            transform: translateX(-60%);
        }

        img:nth-child(2) {
            transform: scale(1.05);
        }

        img:nth-child(3) {
            transform: translateX(60%);
        }
    }

    img {
        object-fit: cover;
        border-radius: 25px;
        box-shadow: 0 8px 24px rgba(17, 17, 26, 0.1),
            0 16px 56px rgba(17, 17, 26, 0.1), 0 24px 80px rgba(17, 17, 26, 0.1);
        transition: all 0.3s ease-in-out;
        aspect-ratio: 7/8;

        &:nth-child(1) {
            width: 44%;
            position: absolute;
            transform: translateX(-40%);
        }
        &:nth-child(2) {
            width: 44%;
            aspect-ratio: 35/48;
            position: absolute;
            z-index: 1;
        }
        &:nth-child(3) {
            width: 44%;
            position: absolute;
            transform: translateX(40%);
        }
    }
`;

export const ImageContainer2 = styled(ImageContainer)`
    &:hover {
        img:first-child {
            transform: scale(1.34);
        }

        img:last-child {
            box-shadow: none;
        }
    }

    img {
        position: absolute;
        transition: all 0.3s ease-in-out;
        border-radius: 25px;

        &:first-child {
            width: 72%;
        }

        &:last-child {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            width: 36%;
            z-index: 1;
        }
    }
`;

export const ImageContainer3 = styled(ImageContainer)`
    &:hover {
        img:first-child {
            transform: translate(-35%, -20%);
        }

        img:last-child {
            transform: translate(35%, 20%);
            box-shadow: none;
        }
    }

    img {
        position: absolute;
        transition: all 0.3s ease-in-out;
        border-radius: 25px;
        object-fit: cover;
        aspect-ratio: 1/1;

        &:first-child {
            transform: translate(-25%, -10%);
            width: 50%;
        }

        &:last-child {
            transform: translate(25%, 10%);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            width: 50%;
        }
    }
`;
