import { modelsConfig } from "../config/prehistoryModelsConfig";
import Scene from "../components/Scene";

export default function PrehistoryPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // overflow: "hidden",
            }}
        >
            {modelsConfig.map((config, index) => (
                <div style={{ marginBlock: "100px" }} key={index}>
                    <Scene key={index} modelConfig={config} />
                </div>
            ))}
        </div>
    );
}
