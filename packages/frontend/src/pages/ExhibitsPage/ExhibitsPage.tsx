import Scene from "./components/Scene";
import Actions from "./components/Actions";
import ReadMore from "./components/ReadMore";
import * as THREE from "three";
import type { PageConfig, ReadMoreContent } from "@/pages/ExhibitsPage/types";
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
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

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
    const [center, setCenter] = useState(new THREE.Vector3());
    const [readMoreContent, setReadMoreContent] =
        useState<ReadMoreContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);
    useEffect(() => {
        return () => {
            setReadMoreContent(null);
        };
    }, [pageConfig]);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
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
                            <Scene modelConfig={exhibit.modelConfig} />
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
