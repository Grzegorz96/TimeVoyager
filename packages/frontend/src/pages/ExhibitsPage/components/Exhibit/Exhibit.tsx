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
import type {
    ExhibitConfig,
    ReadMoreContent,
} from "@/pages/ExhibitsPage/types";
import { memo } from "react";

function Exhibit({
    index,
    exhibit,
    onModelLoaded,
    setReadMoreContent,
    setCommentsContent,
}: ExhibitProps) {
    const CurrentImageContainer =
        imageContainers[index % imageContainers.length];

    return (
        <ExhibitWrapper>
            <ExhibitCard $reverse={index % 2 === 0}>
                <Scene
                    modelConfig={exhibit.modelConfig}
                    onModelLoaded={onModelLoaded}
                />
                <ContentContainer>
                    <UpperTitle>{exhibit.content.upperTitle}</UpperTitle>
                    <Title>{exhibit.content.title}</Title>
                    <ShortDescription>
                        {exhibit.content.shortDescription}
                    </ShortDescription>
                    <Actions
                        setReadMoreContent={() => {
                            setReadMoreContent({
                                longDescription:
                                    exhibit.content.longDescription,
                                images: exhibit.images,
                            });
                        }}
                        setCommentsContent={() =>
                            setCommentsContent({
                                upperTitle: exhibit.content.upperTitle,
                                title: exhibit.content.title,
                                modelConfig: exhibit.modelConfig,
                            })
                        }
                    />
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
    onModelLoaded: () => void;
    setReadMoreContent: React.Dispatch<
        React.SetStateAction<ReadMoreContent | null>
    >;
    setCommentsContent: React.Dispatch<any>;
};

export default memo(Exhibit);
