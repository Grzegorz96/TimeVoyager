import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height: 600px;

    background-color: transparent;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        aspect-ratio: 1.8;
        background: radial-gradient(
                40% 40% at 50% 50%,
                rgba(142, 177, 223, 0.24) 0,
                rgba(161, 155, 228, 0) 100%
            ),
            radial-gradient(
                40% 40% at 50% 50%,
                rgba(255, 134, 189, 0.14) 0,
                rgba(222, 141, 178, 0) 100%
            );
        background-repeat: no-repeat;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300%;
        z-index: -1;
    }
`;
