import {
    ExhibitsLoadingScreen,
    ReadMore,
    Exhibit,
    Comments,
} from "./components";
import type { PageConfig, ReadMoreContent, CommentsContent } from "./types";
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
    const [commentsContent, setCommentsContent] =
        useState<CommentsContent | null>(null);

    const numberOfModels = pageConfig.exhibitsConfig.length;

    useLayoutEffect(() => {
        return () => {
            setReadMoreContent(null);
            setLoadedModelsCount(0);
            // document.body.style.overflow = "";
        };
    }, [pageConfig]);

    useEffect(() => {
        // document.body.style.overflow =
        //     loadedModelsCount !== numberOfModels ? "hidden" : "";
    }, [loadedModelsCount]);

    const onModelLoaded = useCallback(
        () => setLoadedModelsCount((prev) => prev + 1),
        []
    );

    return (
        <>
            {loadedModelsCount !== numberOfModels && (
                <ExhibitsLoadingScreen
                    {...{ loadedModelsCount, numberOfModels }}
                />
            )}
            {commentsContent && (
                <Comments {...{ commentsContent, setCommentsContent }} />
            )}
            {readMoreContent && (
                <ReadMore
                    {...{
                        readMoreContent,
                        setReadMoreContent,
                    }}
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
                            setReadMoreContent,
                            setCommentsContent,
                        }}
                    />
                ))}
            </ExhibitsContainer>
        </>
    );
}

type ExhibitsPageProps = {
    pageConfig: PageConfig;
};
