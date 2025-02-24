import { type ExhibitContent } from "./ExhibitContent";
import { type Exhibit } from "./Exhibit";

export type CommentsContent = {
    modelPath: Exhibit["modelPath"];
    upperTitle: ExhibitContent["upperTitle"];
    title: ExhibitContent["title"];
};
