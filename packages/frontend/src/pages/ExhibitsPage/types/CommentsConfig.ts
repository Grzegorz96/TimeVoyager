import { type ExhibitContent } from "./ExhibitContent";
import { type Exhibit } from "./Exhibit";

export type CommentsConfig = {
    exhibitId: Exhibit["id"];
    modelPath: Exhibit["modelPath"];
    upperTitle: ExhibitContent["upperTitle"];
    title: ExhibitContent["title"];
};
