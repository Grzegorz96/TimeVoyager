import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "./Actions.styles";
import { type ExhibitConfig } from "@/pages/ExhibitsPage/types";
import {
    setReadMoreContent,
    setCommentsContent,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";

export default function Actions({ exhibit, dispatch }: ActionsProps) {
    return (
        <Container>
            <Button
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
            </Button>
            <Button $iconOnly $padding="3px 3px">
                <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button
                $iconOnly
                $padding="3px 3px"
                onClick={() => {
                    dispatch(
                        setCommentsContent({
                            modelPath: exhibit.modelPath,
                            upperTitle: exhibit.content.upperTitle,
                            title: exhibit.content.title,
                        })
                    );
                }}
            >
                <FontAwesomeIcon icon={faComment} />
            </Button>
        </Container>
    );
}

type ActionsProps = {
    exhibit: ExhibitConfig;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
