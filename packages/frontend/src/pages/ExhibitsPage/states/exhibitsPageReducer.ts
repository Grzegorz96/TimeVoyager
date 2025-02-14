import {
    type ExhibitsPageState,
    exhibitsPageInitialState,
} from "./exhibitsPageInitialState";
import { type ExhibitsPageAction } from "./exhibitsPageActions";

export const exhibitsPageReducer = (
    state: ExhibitsPageState,
    action: ExhibitsPageAction
) => {
    switch (action.type) {
        case "SET_READ_MORE_CONTENT":
            return { ...state, readMoreContent: action.payload };
        case "SET_COMMENTS_CONTENT":
            return { ...state, commentsContent: action.payload };
        case "INCREMENT_LOADED_MODELS_COUNT":
            return { ...state, loadedModelsCount: state.loadedModelsCount + 1 };
        case "RESET_LOADED_MODELS_COUNT":
            return { ...state, loadedModelsCount: 0 };
        case "RESET_EXHIBITS_PAGE_STATE":
            return exhibitsPageInitialState;
        default:
            const unhandledAction: never = action;
            console.error(`Unhandled action: ${unhandledAction}`);
            return state;
    }
};
