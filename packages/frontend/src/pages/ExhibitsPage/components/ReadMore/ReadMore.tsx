import {
    Overlay,
    ReadMoreContainer,
    ReadMoreLongDescription,
    ReadMoreScrollContainer,
    ReadMoreImage,
    ReadMoreButton,
} from "./ReadMore.styles";
import {
    setReadMoreContent,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";
import { type ReadMoreContent } from "@/pages/ExhibitsPage/types";

export default function ReadMore({ readMoreContent, dispatch }: ReadMoreProps) {
    return (
        <Overlay onClick={() => dispatch(setReadMoreContent(null))}>
            <ReadMoreContainer onClick={(e) => e.stopPropagation()}>
                <ReadMoreLongDescription>
                    {readMoreContent.longDescription}
                </ReadMoreLongDescription>
                <ReadMoreScrollContainer>
                    {readMoreContent.images.map((image, index) => (
                        <ReadMoreImage key={index} src={image} />
                    ))}
                </ReadMoreScrollContainer>
                <ReadMoreButton
                    onClick={() => dispatch(setReadMoreContent(null))}
                >
                    Close
                </ReadMoreButton>
            </ReadMoreContainer>
        </Overlay>
    );
}

type ReadMoreProps = {
    readMoreContent: ReadMoreContent;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
