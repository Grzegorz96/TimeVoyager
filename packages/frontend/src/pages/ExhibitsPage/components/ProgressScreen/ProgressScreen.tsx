import { Container, ProgressBar, ProgressText } from "./ProgressScreen.styles";
import { useScrollLockControl } from "@/hooks";

export default function ProgressScreen({
    loadedModelsCount,
    numberOfModels,
}: ProgressScreenProps) {
    useScrollLockControl();
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

type ProgressScreenProps = {
    numberOfModels: number;
    loadedModelsCount: number;
};
