import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.textPrimary};
`;

export const FooterText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.textPrimary};
`;

export const FooterLogo = styled.img.attrs({
    src: "/src/assets/images/asd.png",
    alt: "logo",
})`
    border-radius: 15px;
    width: 80px;
`;
