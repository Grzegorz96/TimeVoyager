import { type ExhibitContent } from "./ExhibitContent";

export type ReadMoreContent = Pick<
    ExhibitContent,
    "longDescription" | "images"
>;
