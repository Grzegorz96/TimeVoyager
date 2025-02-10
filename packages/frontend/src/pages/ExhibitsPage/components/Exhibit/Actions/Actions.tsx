import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionsContainer, ActionButton } from "./Actions.styles";

export default function Actions({
    setReadMoreContent,
    setCommentsContent,
}: ActionsProps) {
    return (
        <ActionsContainer>
            <ActionButton
                $padding="10px 20px"
                $width="200px"
                onClick={setReadMoreContent}
            >
                Read More
            </ActionButton>
            <ActionButton $iconOnly $padding="3px 3px">
                <FontAwesomeIcon icon={faHeart} />
            </ActionButton>
            <ActionButton
                $iconOnly
                $padding="3px 3px"
                onClick={setCommentsContent}
            >
                <FontAwesomeIcon icon={faComment} />
            </ActionButton>
        </ActionsContainer>
    );
}

type ActionsProps = {
    setReadMoreContent: () => void;
    setCommentsContent: () => void;
};
