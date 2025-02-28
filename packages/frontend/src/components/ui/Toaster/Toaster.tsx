import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

export const Toaster = styled(ToastContainer)`
    z-index: 10001;

    .Toastify__toast {
        background-color: ${({ theme }) => theme.textPrimary};
        color: ${({ theme }) => theme.primary};
    }

    .Toastify__close-button {
        color: ${({ theme }) => theme.secondary};
    }
`;

export const showToast = ({ message, type, duration = 5000 }: ShowToast) => {
    toast[type](message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

type ShowToast = {
    message: string;
    type: "success" | "error" | "info" | "warning";
    duration?: number;
};
