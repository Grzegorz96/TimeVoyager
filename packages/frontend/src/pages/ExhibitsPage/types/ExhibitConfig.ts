import { type ModelConfig } from "./ModelConfig";
import { type ExhibitContent } from "./ExhibitContent";

export type ExhibitConfig = {
    id: number;
    modelConfig: ModelConfig;
    content: ExhibitContent;
};
