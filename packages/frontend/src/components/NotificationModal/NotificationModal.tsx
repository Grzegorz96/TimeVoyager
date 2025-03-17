import {
    faCircleExclamation,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Text,
    Title,
    Overlay,
    Modal,
} from "./NotificationModal.styles";
import { useAppDispatch } from "@/app";
import { clearNotification } from "@/states/notificationSlice";
import { useScrollLockControl } from "@/hooks";
import { type BaseResponse } from "@timevoyager/shared";

export default function NotificationModal({
    notification,
}: NotificationModalProps) {
    useScrollLockControl();
    const dispatch = useAppDispatch();

    const modalVariants = {
        hidden: {
            opacity: 0,
            transform: "translate3d(-50%, -200%, 0)",
        },
        visible: {
            opacity: 1,
            transform: "translate3d(-50%, -50%, 0)",
            transition: {
                duration: 0.7,
            },
        },
        exit: {
            opacity: 0,
            transform: "translate3d(-50%, -200%, 0)",
            transition: {
                duration: 0.7,
            },
        },
    };

    const handleClose = () => {
        dispatch(clearNotification());
    };

    const isSuccess = notification.status >= 200 && notification.status < 300;

    return (
        <Overlay onClick={handleClose}>
            <Modal
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <FontAwesomeIcon
                    icon={isSuccess ? faCircleCheck : faCircleExclamation}
                    color={isSuccess ? "#5cb85c" : "#d9534f"}
                />
                <Title>
                    {isSuccess
                        ? "Success"
                        : `Error with ${notification.status} status`}
                </Title>
                <Text>{notification.message}</Text>
                <Button
                    autoFocus
                    onClick={handleClose}
                    onKeyDown={(e) => {
                        if (e.key === "Tab") {
                            e.preventDefault();
                        }
                    }}
                >
                    Close
                </Button>
            </Modal>
        </Overlay>
    );
}

type NotificationModalProps = {
    notification: BaseResponse;
};
