import {
    LoadingScreenContainer,
    ProgressBar,
    ProgressText,
} from "./LoadingScreen.styles";

export default function LoadingScreen({
    loadedModelsCount,
    numberOfModels,
}: LoadingScreenProps) {
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

type LoadingScreenProps = {
    numberOfModels: number;
    loadedModelsCount: number;
};
