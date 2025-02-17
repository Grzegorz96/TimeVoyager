import { type ExhibitContent } from "./ExhibitContent";
import { type ExhibitConfig } from "./ExhibitConfig";

export type CommentsContent = {
    modelPath: ExhibitConfig["modelPath"];
    upperTitle: ExhibitContent["upperTitle"];
    title: ExhibitContent["title"];
};
