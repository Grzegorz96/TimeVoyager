import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ActionLink, LikeButton, Counter } from "./Actions.styles";
import { type Exhibit } from "@/pages/ExhibitsPage/types";
import { useAppSelector } from "@/app";
import {
    useAddExhibitLikeMutation,
    useDeleteExhibitLikeMutation,
} from "@/services/api";
import { memo } from "react";

function Actions({ exhibitId, exhibitStats }: ActionsProps) {
    const user = useAppSelector(({ auth }) => auth.user);
    const [addExhibitLike] = useAddExhibitLikeMutation();
    const [deleteExhibitLike] = useDeleteExhibitLikeMutation();

    return (
        <Container>
            <ActionLink
                to={`read-more/${exhibitId}`}
                preventScrollReset
                $padding="10px 20px"
                $width="200px"
            >
                Read More
            </ActionLink>
            <LikeButton
                $padding="3px 3px"
                $iconOnly
                $isLikedByUser={exhibitStats?.isLikedByUser}
                disabled={!user}
                onClick={() => {
                    if (exhibitStats?.isLikedByUser === undefined) {
                        return;
                    } else if (exhibitStats.isLikedByUser) {
                        deleteExhibitLike(exhibitId);
                    } else {
                        addExhibitLike(exhibitId);
                    }
                }}
            >
                <FontAwesomeIcon icon={faHeart} />
            </LikeButton>
            {exhibitStats && <Counter>{exhibitStats.likesCount}</Counter>}
            <ActionLink
                to={`comments/${exhibitId}`}
                preventScrollReset
                $padding="3px 3px"
                $iconOnly
            >
                <FontAwesomeIcon icon={faComment} />
            </ActionLink>
            {exhibitStats && <Counter>{exhibitStats.commentsCount}</Counter>}
        </Container>
    );
}

type ActionsProps = {
    exhibitId: Exhibit["id"];
    exhibitStats: Exhibit["stats"];
};

export default memo(Actions);
