import styled from "styled-components";
import { Link as L } from "react-router-dom";
import H from "react-headroom";

export const Headroom = styled(H)`
    .headroom {
        z-index: 100 !important;
        width: 100vw !important;
        padding-right: 10px;
    }

    .headroom--unfixed {
        transition: background-color 0.5s ease-in-out;
    }

    .headroom--pinned {
        background-color: ${({ theme }) => theme.primary};
    }
`;

export const Container = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
    padding: 10px;
`;

export const Link = styled(L)`
    margin-left: 15px;
    border-radius: 15px;
    height: 100%;
`;

export const Logo = styled.img.attrs({
    src: "/assets/images/asd.png",
    alt: "logo",
})`
    border-radius: 15px;
    height: 100%;
`;
