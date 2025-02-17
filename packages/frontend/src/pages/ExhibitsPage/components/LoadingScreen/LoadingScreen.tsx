import { Container, ProgressBar, ProgressText } from "./LoadingScreen.styles";

export default function LoadingScreen({
    loadedModelsCount,
    numberOfModels,
}: LoadingScreenProps) {
    const progress = Math.round((loadedModelsCount / numberOfModels) * 100);

    return (
        <Container>
            <ProgressBar>
                <div className="bar" style={{ width: `${progress}%` }}></div>
            </ProgressBar>
            <ProgressText>{progress}%</ProgressText>
        </Container>
    );
}

type LoadingScreenProps = {
    numberOfModels: number;
    loadedModelsCount: number;
};
