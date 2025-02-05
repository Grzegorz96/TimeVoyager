import { type ExhibitConfig } from "./ExhibitConfig";
import { type ExhibitContent } from "./ExhibitContent";

export type ReadMoreContent = {
    longDescription: ExhibitContent["longDescription"];
    images: ExhibitConfig["images"];
};
