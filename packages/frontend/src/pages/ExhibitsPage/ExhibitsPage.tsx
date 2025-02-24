import { useEffect, useLayoutEffect, useState } from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { LoadingScreen, Exhibit } from "./components";
import { type PageConfig } from "./types";
import {
    ExhibitsContainer,
    IntroSection,
    Heading,
    MainDescription,
} from "./ExhibitsPage.styles";

export default function ExhibitsPage() {
    const pageConfig = useLoaderData() as PageConfig;
    const [loadedModelsCount, setLoadedModelsCount] = useState(0);

    const numberOfModels = pageConfig.exhibits.length;

    useLayoutEffect(() => {
        return () => {
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
