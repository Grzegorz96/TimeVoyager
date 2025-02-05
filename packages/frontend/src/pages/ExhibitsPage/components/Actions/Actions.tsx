import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionsContainer, ActionButton } from "./Actions.styles";
import type { ExhibitContent, ExhibitConfig } from "@/pages/ExhibitsPage/types";

export default function Actions({ setReadMoreContent }: ActionsProps) {
    // console.log("Actions");

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
            <ActionButton $iconOnly $padding="3px 3px">
                <FontAwesomeIcon icon={faComment} />
            </ActionButton>
        </ActionsContainer>
    );
}

type ActionsProps = {
    longDescription: ExhibitContent["longDescription"];
    images: ExhibitConfig["images"];
    setReadMoreContent: () => void;
};
