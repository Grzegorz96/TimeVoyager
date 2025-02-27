import { pagesData } from "@/pages/ExhibitsPage";
import { type LoaderFunction } from "react-router-dom";
import type {
    PageConfig,
    ReadMoreConfig,
    CommentsConfig,
} from "@/pages/ExhibitsPage/types";

const getExhibit = (
    exhibitsCategory: string | undefined,
    exhibitId: string | undefined
) => {
    return pagesData
        .find(({ category }) => category === exhibitsCategory)
        ?.config.exhibits.find(({ id }) => id === exhibitId);
};

export const getExhibitsPageConfig: LoaderFunction = ({
    params: { exhibitsCategory },
}): PageConfig => {
    console.log("GET EXHIBITS PAGE CONFIG");
    const foundExhibitsPageData = pagesData.find(
        ({ category }) => category === exhibitsCategory
    );

    if (!foundExhibitsPageData) {
        throw new Error("Category not found");
    }

    return foundExhibitsPageData.config;
};

export const getReadMoreConfig: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): ReadMoreConfig => {
    console.log("GET READMORE DATA");
    const foundExhibit = getExhibit(exhibitsCategory, exhibitId);

    if (!foundExhibit) {
        throw new Error("Exhibit not found");
    }

    return {
        longDescription: foundExhibit.content.longDescription,
        images: foundExhibit.images,
    };
};

export const getCommentsConfig: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): CommentsConfig => {
    console.log("GET COMMENTS DATA");
    const foundExhibit = getExhibit(exhibitsCategory, exhibitId);

    if (!foundExhibit) {
        throw new Error("Exhibit not found");
    }

    return {
        exhibitId: foundExhibit.id,
        modelPath: foundExhibit.modelPath,
        upperTitle: foundExhibit.content.upperTitle,
        title: foundExhibit.content.title,
    };
};
