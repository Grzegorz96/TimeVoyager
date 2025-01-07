import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    ModalButton,
    ModalText,
    ModalTitle,
    Overlay,
    Modal,
} from "./ErrorModal.styles";
import { useAppDispatch, useAppSelector } from "@/app";
import { clearError } from "@/states/errorSlice";
import { AnimatePresence } from "motion/react";

export default function ErrorModal() {
    const error = useAppSelector(({ error }) => error);
    const dispatch = useAppDispatch();

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

    const handleClose = () => {
        dispatch(clearError());
    };

    return (
        <AnimatePresence>
            {error && (
                <Overlay onClick={handleClose}>
                    <Modal
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <ModalTitle>{`Error with ${error.status} status`}</ModalTitle>
                        <ModalText>{error.message}</ModalText>
                        <ModalButton
                            autoFocus
                            onClick={handleClose}
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
            )}
        </AnimatePresence>
    );
}
