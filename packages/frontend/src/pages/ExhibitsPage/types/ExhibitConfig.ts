import { type ExhibitContent } from "./ExhibitContent";

export type ExhibitConfig = {
    id: number;
    modelPath: string;
    content: ExhibitContent;
    images: string[];
    imageContainerImages: string[];
};
