import {
    LoadingScreenContainer,
    ProgressBar,
    ProgressText,
} from "./ExhibitsLoadingScreen.styles";

export default function ExhibitsLoadingScreen({
    loadedModelsCount,
    numberOfModels,
}: LoadingScreenForModelProps) {
    const progress = Math.round((loadedModelsCount / numberOfModels) * 100);

    return (
        <LoadingScreenContainer>
            <ProgressBar>
                <div className="bar" style={{ width: `${progress}%` }}></div>
            </ProgressBar>
            <ProgressText>{progress}%</ProgressText>
        </LoadingScreenContainer>
    );
}

type LoadingScreenForModelProps = {
    loadedModelsCount: number;
    numberOfModels: number;
};
