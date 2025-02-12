import { type ExhibitContent } from "./ExhibitContent";
import { type ModelConfig } from "./ModelConfig";

export type CommentsContent = {
    path: ModelConfig["path"];
    upperTitle: ExhibitContent["upperTitle"];
    title: ExhibitContent["title"];
};
