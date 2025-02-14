import { useEffect, useLayoutEffect, useReducer } from "react";
import { LoadingScreen, ReadMore, Exhibit, Comments } from "./components";
import type { PageConfig } from "./types";
import {
    resetExhibitsPageState,
    exhibitsPageReducer,
    exhibitsPageInitialState,
    type ExhibitsPageState,
    type ExhibitsPageAction,
} from "./states";
import {
    ExhibitsContainer,
    IntroSection,
    Heading,
    MainDescription,
} from "./ExhibitsPage.styles";

export default function ExhibitsPage({ pageConfig }: ExhibitsPageProps) {
    const [state, dispatch] = useReducer<
        React.Reducer<ExhibitsPageState, ExhibitsPageAction>
    >(exhibitsPageReducer, exhibitsPageInitialState);
    const { commentsContent, readMoreContent, loadedModelsCount } = state;
    const numberOfModels = pageConfig.exhibitsConfig.length;

    useLayoutEffect(() => {
        return () => {
            dispatch(resetExhibitsPageState());
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
                <LoadingScreen
                    numberOfModels={numberOfModels}
                    loadedModelsCount={loadedModelsCount}
                />
            )}
            {commentsContent && (
                <Comments
                    commentsContent={commentsContent}
                    dispatch={dispatch}
                />
            )}
            {readMoreContent && (
                <ReadMore
                    readMoreContent={readMoreContent}
                    dispatch={dispatch}
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
                        index={index}
                        exhibit={exhibit}
                        dispatch={dispatch}
                    />
                ))}
            </ExhibitsContainer>
        </>
    );
}

type ExhibitsPageProps = {
    pageConfig: PageConfig;
};
