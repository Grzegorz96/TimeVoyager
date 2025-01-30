import {
    ReadMoreOverlay,
    ReadMoreContainer,
    ReadMoreContent,
    ReadMoreScrollContainer,
    ReadMoreButton,
} from "./ReadMore.styles";
import { type ModelConfig } from "@/types";

export default function ReadMore({
    readMoreContent,
    setReadMoreContent,
}: ReadMoreProps) {
    return (
        <ReadMoreOverlay onClick={() => setReadMoreContent(null)}>
            <ReadMoreContainer onClick={(e) => e.stopPropagation()}>
                <ReadMoreContent>{readMoreContent}</ReadMoreContent>
                <ReadMoreScrollContainer></ReadMoreScrollContainer>
                <ReadMoreButton onClick={() => setReadMoreContent(null)}>
                    Close
                </ReadMoreButton>
            </ReadMoreContainer>
        </ReadMoreOverlay>
    );
}

type ReadMoreProps = {
    readMoreContent: ModelConfig["content"]["longDescription"];
    setReadMoreContent: React.Dispatch<React.SetStateAction<string | null>>;
};
