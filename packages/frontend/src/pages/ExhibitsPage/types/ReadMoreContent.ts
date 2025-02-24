import { type Exhibit } from "./Exhibit";
import { type ExhibitContent } from "./ExhibitContent";

export type ReadMoreContent = {
    longDescription: ExhibitContent["longDescription"];
    images: Exhibit["images"];
};
