import { type ExhibitContent } from "./ExhibitContent";

export type Exhibit = {
    id: string;
    modelPath: string;
    content: ExhibitContent;
    images: string[];
    imageContainerImages: string[];
    stats?: {
        likeCount: number;
        commentCount: number;
    };
};
