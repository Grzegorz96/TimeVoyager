import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

export default function CustomToaster() {
    const theme = useTheme();

    return (
        <Toaster
            containerStyle={{
                zIndex: 9998,
            }}
            position="top-right"
            toastOptions={{
                style: {
                    borderRadius: "20px",
                    background: theme.secondary,
                    color: theme.textPrimary,
                    textAlign: "center",
                    padding: "10px",
                },
            }}
        />
    );
}
