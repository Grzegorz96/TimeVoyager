import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ActionLink, LikeButton, Counter } from "./Actions.styles";
import { type Exhibit } from "@/pages/ExhibitsPage/types";

export default function Actions({ exhibitId, exhibitStats }: ActionsProps) {
    return (
        <Container>
            <ActionLink
                to={`read-more/${exhibitId}`}
                $padding="10px 20px"
                $width="200px"
            >
                Read More
            </ActionLink>
            <LikeButton $padding="3px 3px" $iconOnly>
                <FontAwesomeIcon icon={faHeart} />
            </LikeButton>
            {exhibitStats && <Counter>{exhibitStats.likeCount}</Counter>}
            <ActionLink
                to={`comments/${exhibitId}`}
                $padding="3px 3px"
                $iconOnly
            >
                <FontAwesomeIcon icon={faComment} />
            </ActionLink>
            {exhibitStats && <Counter>{exhibitStats.commentCount}</Counter>}
        </Container>
    );
}

type ActionsProps = {
    exhibitId: Exhibit["id"];
    exhibitStats: Exhibit["stats"];
};
