import { ExhibitsLoadingScreen, ReadMore, Exhibit } from "./components";
import type { PageConfig, ReadMoreContent } from "./types";
import {
    ExhibitsContainer,
    IntroSection,
    Heading,
    MainDescription,
} from "./ExhibitsPage.styles";
import { useState, useEffect, useLayoutEffect, useCallback } from "react";

export default function ExhibitsPage({ pageConfig }: ExhibitsPageProps) {
    const [loadedModelsCount, setLoadedModelsCount] = useState(0);
    const [readMoreContent, setReadMoreContent] =
        useState<ReadMoreContent | null>(null);

    const numberOfModels = pageConfig.exhibitsConfig.length;

    useLayoutEffect(() => {
        return () => {
            setReadMoreContent(null);
            setLoadedModelsCount(0);
            document.body.style.overflow = "";
        };
    }, [pageConfig]);

    useEffect(() => {
        document.body.style.overflow =
            loadedModelsCount !== numberOfModels ? "hidden" : "";
    }, [loadedModelsCount]);

    const onModelLoaded = useCallback(
        () => setLoadedModelsCount((prev) => prev + 1),
        []
    );

    // const setReadMore = useCallback((exhibit: ExhibitConfig) => {
    //     setReadMoreContent({
    //         longDescription: exhibit.content.longDescription,
    //         images: exhibit.images,
    //     });
    // }, []);

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
                    setReadMoreContent={() => setReadMoreContent(null)}
                />
            )}
            <IntroSection>
                <Heading>{pageConfig.heading}</Heading>
                <MainDescription>{pageConfig.mainDescription}</MainDescription>
            </IntroSection>
            <ExhibitsContainer>
                {pageConfig.exhibitsConfig.map((exhibit, index) => (
                    <Exhibit
                        key={index}
                        {...{
                            index,
                            exhibit,
                            onModelLoaded,
                        }}
                        setReadMoreContent={useCallback(() => {
                            setReadMoreContent({
                                longDescription:
                                    exhibit.content.longDescription,
                                images: exhibit.images,
                            });
                        }, [])}
                    />
                ))}
            </ExhibitsContainer>
        </>
    );
}

type ExhibitsPageProps = {
    pageConfig: PageConfig;
};
