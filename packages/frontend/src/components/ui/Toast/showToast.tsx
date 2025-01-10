import toast from "react-hot-toast";
import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const StyledButton = styled.button`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    height: 100%;
`;

const StyledText = styled.p`
    color: ${({ theme }) => theme.textPrimary};
`;

export const showToast = (
    message: string,
    type: "success" | "error",
    duration: number = Infinity
) => {
    toast[type](
        (t) => (
            <StyledContent>
                <StyledText>{message}</StyledText>
                <StyledButton onClick={() => toast.dismiss(t.id)}>
                    OK
                </StyledButton>
            </StyledContent>
        ),
        {
            duration,
        }
    );
};
