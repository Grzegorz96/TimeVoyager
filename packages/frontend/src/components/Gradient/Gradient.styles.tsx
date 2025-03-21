import styled from "styled-components";

export const Container = styled.div<{ $pathname: string }>`
    width: 100%;
    height: 100%;
    background-image: ${({ theme: { gradients }, $pathname }) =>
        gradients[$pathname as keyof typeof gradients] || null};
`;

// "radial-gradient(ellipse 70% 70% at 100% 100%, #c870da42, #e877af00)"};
