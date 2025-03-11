import { type ExhibitContent } from "./ExhibitContent";
import { type ExhibitStatsDTO } from "@timevoyager/shared";

export type Exhibit = {
    id: string;
    modelPath: string;
    content: ExhibitContent;
    images: string[];
    imageContainerImages: string[];
    stats?: Omit<ExhibitStatsDTO, "exhibitId">;
};
