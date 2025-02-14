import {
    faCircleExclamation,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    ModalButton,
    ModalText,
    ModalTitle,
    Overlay,
    Modal,
} from "./NotificationModal.styles";
import { useAppDispatch, useAppSelector } from "@/app";
import { clearNotification } from "@/states/notificationSlice";
import { AnimatePresence } from "motion/react";
import { memo } from "react";

function NotificationModal() {
    const notification = useAppSelector(({ notification }) => notification);
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
        dispatch(clearNotification());
    };

    const isSuccess =
        notification && notification.status >= 200 && notification.status < 300;

    return (
        <AnimatePresence>
            {notification && (
                <Overlay onClick={handleClose}>
                    <Modal
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FontAwesomeIcon
                            icon={
                                isSuccess ? faCircleCheck : faCircleExclamation
                            }
                            color={isSuccess ? "#5cb85c" : "#d9534f"}
                        />
                        <ModalTitle>
                            {isSuccess
                                ? "Success"
                                : `Error with ${notification.status} status`}
                        </ModalTitle>
                        <ModalText>{notification.message}</ModalText>
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

export default memo(NotificationModal);
