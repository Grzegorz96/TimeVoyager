import {
    LoadingScreenContainer,
    ProgressBar,
    ProgressText,
} from "./ExhibitsLoadingScreen";

export default function ExhibitsLoadingScreen({
    loadedCount,
    totalCount,
}: LoadingScreenForModelProps) {
    const progress = Math.round((loadedCount / totalCount) * 100);

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
    loadedCount: number;
    totalCount: number;
};
