import type {
    ReadMoreContent,
    CommentsContent,
} from "@/pages/ExhibitsPage/types";

const exhibitsPageActions = {
    setReadMoreContent: (payload: ReadMoreContent | null) => ({
        type: "SET_READ_MORE_CONTENT" as const,
        payload,
    }),
    setCommentsContent: (payload: CommentsContent | null) => ({
        type: "SET_COMMENTS_CONTENT" as const,
        payload,
    }),
    incrementLoadedModelsCount: () => ({
        type: "INCREMENT_LOADED_MODELS_COUNT" as const,
    }),
    resetLoadedModelsCount: () => ({
        type: "RESET_LOADED_MODELS_COUNT" as const,
    }),
    resetExhibitsPageState: () => ({
        type: "RESET_EXHIBITS_PAGE_STATE" as const,
    }),
};

export type ExhibitsPageAction = ReturnType<
    (typeof exhibitsPageActions)[keyof typeof exhibitsPageActions]
>;

export const {
    setCommentsContent,
    setReadMoreContent,
    incrementLoadedModelsCount,
    resetLoadedModelsCount,
    resetExhibitsPageState,
} = exhibitsPageActions;
