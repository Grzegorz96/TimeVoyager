import {
    Overlay,
    ReadMoreContainer,
    ReadMoreLongDescription,
    ReadMoreScrollContainer,
    ReadMoreImage,
    ReadMoreButton,
} from "./ReadMore.styles";
import { type ReadMoreContent } from "@/pages/ExhibitsPage/types";

export default function ReadMore({
    readMoreContent,
    setReadMoreContent,
}: ReadMoreProps) {
    return (
        <Overlay onClick={() => setReadMoreContent(null)}>
            <ReadMoreContainer onClick={(e) => e.stopPropagation()}>
                <ReadMoreLongDescription>
                    {readMoreContent.longDescription}
                </ReadMoreLongDescription>
                <ReadMoreScrollContainer>
                    {readMoreContent.images?.map((image, index) => (
                        <ReadMoreImage key={index} src={image} />
                    ))}
                </ReadMoreScrollContainer>
                <ReadMoreButton onClick={() => setReadMoreContent(null)}>
                    Close
                </ReadMoreButton>
            </ReadMoreContainer>
        </Overlay>
    );
}

type ReadMoreProps = {
    readMoreContent: ReadMoreContent;
    setReadMoreContent: React.Dispatch<
        React.SetStateAction<ReadMoreContent | null>
    >;
};
