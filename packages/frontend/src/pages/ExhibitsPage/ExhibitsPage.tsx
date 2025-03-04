import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { LoadingScreen, Exhibit } from "./components";
import {
    ExhibitsContainer,
    IntroSection,
    Heading,
    MainDescription,
} from "./ExhibitsPage.styles";

import { useExhibitsPageData } from "./hooks";

export default function ExhibitsPage() {
    const { exhibitsCategory } = useParams();
    const pageConfig = useExhibitsPageData();
    const [loadedModelsCount, setLoadedModelsCount] = useState(0);
    const numberOfModels = pageConfig.exhibits.length;

    useLayoutEffect(() => {
        return () => {
            setLoadedModelsCount(0);
            document.body.style.overflow = "";
        };
    }, [exhibitsCategory]);

    useEffect(() => {
        document.body.style.overflow =
            loadedModelsCount !== numberOfModels ? "hidden" : "";
    }, [loadedModelsCount]);

    return (
        <>
            {loadedModelsCount === numberOfModels ? (
                <Outlet />
            ) : (
                <LoadingScreen
                    numberOfModels={numberOfModels}
                    loadedModelsCount={loadedModelsCount}
                />
            )}
            <IntroSection>
                <Heading>{pageConfig.heading}</Heading>
                <MainDescription>{pageConfig.mainDescription}</MainDescription>
            </IntroSection>
            <ExhibitsContainer>
                {pageConfig.exhibits.map((exhibit, index) => (
                    <Exhibit
                        key={index}
                        index={index}
                        exhibit={exhibit}
                        setLoadedModelsCount={setLoadedModelsCount}
                    />
                ))}
            </ExhibitsContainer>
        </>
    );
}
