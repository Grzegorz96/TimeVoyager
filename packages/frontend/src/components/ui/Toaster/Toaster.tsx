import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

export const Toaster = styled(ToastContainer)`
    .Toastify__toast {
        background-color: ${({ theme }) => theme.textPrimary};
        color: ${({ theme }) => theme.primary};
    }
    .Toastify__close-button {
        color: ${({ theme }) => theme.secondary};
    }
`;

export const showToast = (
    message: string,
    type: "success" | "error" | "info" | "warning",
    duration: number = 5000
) => {
    toast[type](message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};
