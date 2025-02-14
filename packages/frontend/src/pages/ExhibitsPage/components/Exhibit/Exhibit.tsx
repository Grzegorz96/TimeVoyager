import {
    ExhibitWrapper,
    ExhibitCard,
    ContentContainer,
    UpperTitle,
    Title,
    ShortDescription,
    imageContainers,
} from "./Exhibit.styles";
import Scene from "./Scene";
import Actions from "./Actions";
import { type ExhibitConfig } from "@/pages/ExhibitsPage/types";
import { type ExhibitsPageAction } from "@/pages/ExhibitsPage/states";
import { memo } from "react";

function Exhibit({ index, exhibit, dispatch }: ExhibitProps) {
    const CurrentImageContainer =
        imageContainers[index % imageContainers.length];

    return (
        <ExhibitWrapper>
            <ExhibitCard $reverse={index % 2 === 0}>
                <Scene path={exhibit.modelConfig.path} dispatch={dispatch} />
                <ContentContainer>
                    <UpperTitle>{exhibit.content.upperTitle}</UpperTitle>
                    <Title>{exhibit.content.title}</Title>
                    <ShortDescription>
                        {exhibit.content.shortDescription}
                    </ShortDescription>
                    <Actions exhibit={exhibit} dispatch={dispatch} />
                </ContentContainer>
            </ExhibitCard>
            <CurrentImageContainer>
                {exhibit.imageContainerImages.map((image, index) => (
                    <img key={index} src={image} />
                ))}
            </CurrentImageContainer>
        </ExhibitWrapper>
    );
}

type ExhibitProps = {
    index: number;
    exhibit: ExhibitConfig;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};

export default memo(Exhibit);
