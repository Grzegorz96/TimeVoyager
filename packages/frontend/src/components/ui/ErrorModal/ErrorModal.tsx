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
import { clearError } from "@/states/errorDataSlice";
import { AnimatePresence } from "motion/react";
import { baseResponseSchema } from "@timevoyager/shared";

export default function ErrorModal() {
    const errorData = useAppSelector(({ errorData }) => errorData);
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
            {baseResponseSchema.safeParse(errorData).success && (
                <Overlay onClick={handleClose}>
                    <Modal
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <ModalTitle>{`Error with ${errorData.status} status`}</ModalTitle>
                        <ModalText>{errorData.message}</ModalText>
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
