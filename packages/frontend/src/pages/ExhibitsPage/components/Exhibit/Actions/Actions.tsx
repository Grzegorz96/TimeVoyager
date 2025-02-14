import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionsContainer, ActionButton } from "./Actions.styles";
import type { ExhibitConfig } from "@/pages/ExhibitsPage/types";
import {
    setReadMoreContent,
    setCommentsContent,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";

export default function Actions({ exhibit, dispatch }: ActionsProps) {
    return (
        <ActionsContainer>
            <ActionButton
                $padding="10px 20px"
                $width="200px"
                onClick={() => {
                    dispatch(
                        setReadMoreContent({
                            longDescription: exhibit.content.longDescription,
                            images: exhibit.images,
                        })
                    );
                }}
            >
                Read More
            </ActionButton>
            <ActionButton $iconOnly $padding="3px 3px">
                <FontAwesomeIcon icon={faHeart} />
            </ActionButton>
            <ActionButton
                $iconOnly
                $padding="3px 3px"
                onClick={() => {
                    dispatch(
                        setCommentsContent({
                            path: exhibit.modelConfig.path,
                            upperTitle: exhibit.content.upperTitle,
                            title: exhibit.content.title,
                        })
                    );
                }}
            >
                <FontAwesomeIcon icon={faComment} />
            </ActionButton>
        </ActionsContainer>
    );
}

type ActionsProps = {
    exhibit: ExhibitConfig;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
