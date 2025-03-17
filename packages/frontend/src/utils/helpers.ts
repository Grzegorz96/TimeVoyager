import { toast } from "react-toastify";

export function capitalizeFirstLetter(val: string): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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
