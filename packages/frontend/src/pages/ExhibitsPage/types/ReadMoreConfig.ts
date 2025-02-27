import { type Exhibit } from "./Exhibit";
import { type ExhibitContent } from "./ExhibitContent";

export type ReadMoreConfig = {
    longDescription: ExhibitContent["longDescription"];
    images: Exhibit["images"];
};
