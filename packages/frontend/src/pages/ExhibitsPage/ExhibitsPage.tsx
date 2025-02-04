import { Actions, ExhibitsLoadingScreen, ReadMore, Scene } from "./components";
import type { PageConfig, ReadMoreContent } from "./types";
import {
    ExhibitsContainer,
    ExhibitCard,
    ContentContainer,
    ShortDescription,
    Title,
    UpperTitle,
    ImageContainer1,
    ImageContainer2,
    ImageContainer3,
    ExhibitWrapper,
    Heading,
    MainDescription,
    IntroSection,
} from "./ExhibitsPage.styles";
import { useState, useEffect, useLayoutEffect } from "react";

const imageContainers = [
    <ImageContainer1>
        <img src="/src/assets/images/architecture/giza02.jpg" />
        <img src="/src/assets/images/architecture/giza01.jpg" />
        <img src="/src/assets/images/architecture/giza03.jpg" />
    </ImageContainer1>,
    <ImageContainer2>
        <img src="/src/assets/images/architecture/rome.jpg" />
        <img src="/src/assets/images/architecture/cutedrome.jpg" />
    </ImageContainer2>,
    <ImageContainer3>
        <img src="/src/assets/images/architecture/rome.jpg" />
        <img src="/src/assets/images/architecture/cutedrome.jpg" />
    </ImageContainer3>,
];

export default function ExhibitsPage({ pageConfig }: ExhibitsPageProps) {
    const [loadedModelsCount, setLoadedModelsCount] = useState(0);
    const [readMoreContent, setReadMoreContent] =
        useState<ReadMoreContent | null>(null);

    const numberOfModels = pageConfig.exhibitsConfig.length;

    useLayoutEffect(() => {
        return () => {
            console.log("cleanup");
            setReadMoreContent(null);
            setLoadedModelsCount(0);
            document.body.style.overflow = "";
        };
    }, [pageConfig]);

    useEffect(() => {
        document.body.style.overflow =
            loadedModelsCount !== numberOfModels ? "hidden" : "";
    }, [loadedModelsCount]);

    return (
        <>
            {loadedModelsCount !== numberOfModels && (
                <ExhibitsLoadingScreen
                    loadedCount={loadedModelsCount}
                    totalCount={numberOfModels}
                />
            )}
            {readMoreContent && (
                <ReadMore
                    readMoreContent={readMoreContent}
                    setReadMoreContent={setReadMoreContent}
                />
            )}
            <IntroSection>
                <Heading>{pageConfig.heading}</Heading>
                <MainDescription>{pageConfig.mainDescription}</MainDescription>
            </IntroSection>
            <ExhibitsContainer>
                {pageConfig.exhibitsConfig.map((exhibit, index) => (
                    <ExhibitWrapper key={index}>
                        <ExhibitCard $reverse={index % 2 === 0}>
                            <Scene
                                modelConfig={exhibit.modelConfig}
                                onModelLoaded={() =>
                                    setLoadedModelsCount((prev) => prev + 1)
                                }
                            />
                            <ContentContainer>
                                <UpperTitle>
                                    {exhibit.content.upperTitle}
                                </UpperTitle>
                                <Title>{exhibit.content.title}</Title>
                                <ShortDescription>
                                    {exhibit.content.shortDescription}
                                </ShortDescription>
                                <Actions
                                    exhibitContent={exhibit.content}
                                    setReadMoreContent={setReadMoreContent}
                                />
                            </ContentContainer>
                        </ExhibitCard>
                        {imageContainers[index % imageContainers.length]}
                    </ExhibitWrapper>
                ))}
            </ExhibitsContainer>
        </>
    );
}

type ExhibitsPageProps = {
    pageConfig: PageConfig;
};
