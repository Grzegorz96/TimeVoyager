import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionsContainer, ActionButton } from "./Actions.styles";
import { type ModelConfig } from "@/types";

export default function Actions({
    modelContent,
    setReadMoreContent,
}: ActionsProps) {
    function handleLike() {
        console.log("Liked");
    }

    return (
        <ActionsContainer>
            <ActionButton
                $padding="10px 20px"
                $width="200px"
                onClick={() => setReadMoreContent(modelContent.longDescription)}
            >
                Read More
            </ActionButton>
            <ActionButton $iconOnly $padding="3px 3px" onClick={handleLike}>
                <FontAwesomeIcon icon={faHeart} />
            </ActionButton>
            <ActionButton $iconOnly $padding="3px 3px">
                <FontAwesomeIcon icon={faComment} />
            </ActionButton>
        </ActionsContainer>
    );
}

type ActionsProps = {
    modelContent: ModelConfig["content"];
    setReadMoreContent: React.Dispatch<React.SetStateAction<string | null>>;
};
