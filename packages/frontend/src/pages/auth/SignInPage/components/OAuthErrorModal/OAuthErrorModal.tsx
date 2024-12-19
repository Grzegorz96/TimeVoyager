import {
    Overlay,
    Modal,
    ModalText,
    ModalButton,
    ModalTitle,
} from "./OAuthErrorModal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

type ErrorModalProps = {
    error: string;
};

export default function OAuthErrorModal({
    error,
}: ErrorModalProps): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();

    const modalVariants = {
        hidden: {
            opacity: 0,
            y: "-200%",
            x: "-50%",
        },
        visible: {
            opacity: 1,
            y: "-50%",
            x: "-50%",
            transition: {
                duration: 0.7,
            },
        },
        exit: {
            opacity: 0,
            y: "-200%",
            x: "-50%",
            transition: {
                duration: 0.7,
            },
        },
    };

    const handleErrorClose = () => {
        const params = new URLSearchParams(location.search);
        params.delete("error");
        navigate(`${location.pathname}?${params.toString()}`, {
            replace: true,
        });
    };

    return (
        <Overlay onClick={handleErrorClose}>
            <Modal
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                autoFocus
                onClick={(e) => e.stopPropagation()}
            >
                <FontAwesomeIcon icon={faCircleExclamation} />
                <ModalTitle>Error</ModalTitle>
                <ModalText>{error}</ModalText>
                <ModalButton
                    onClick={handleErrorClose}
                    onKeyDown={(e) => {
                        if (e.key === "Tab") {
                            e.preventDefault();
                        }
                    }}
                >
                    Close
                </ModalButton>
            </Modal>
        </Overlay>
    );
}