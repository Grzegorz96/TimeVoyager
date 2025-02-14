import type {
    ReadMoreContent,
    CommentsContent,
} from "@/pages/ExhibitsPage/types";

export const exhibitsPageInitialState = {
    readMoreContent: null as ReadMoreContent | null,
    commentsContent: null as CommentsContent | null,
    loadedModelsCount: 0,
};

export type ExhibitsPageState = typeof exhibitsPageInitialState;
