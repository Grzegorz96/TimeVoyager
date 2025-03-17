import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const Toaster = styled(ToastContainer)`
    z-index: 10001;

    .Toastify__toast {
        background-color: ${({ theme }) => theme.textPrimary};
        color: ${({ theme }) => theme.primary};
    }

    .Toastify__close-button {
        color: ${({ theme }) => theme.secondary};
    }
`;

export default Toaster;
