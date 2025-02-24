import { pagesData } from "@/pages/ExhibitsPage";
import { type LoaderFunction } from "react-router-dom";
import type {
    PageConfig,
    ReadMoreContent,
    CommentsContent,
} from "@/pages/ExhibitsPage/types";

export const getExhibitsPageConfig: LoaderFunction = ({
    params: { exhibitsCategory },
}): PageConfig => {
    // console.log("GET EXHIBITS PAGE CONFIG");
    const foundExhibitsPageData = pagesData.find(
        ({ category }) => category === exhibitsCategory
    );

    if (!foundExhibitsPageData) {
        throw new Error("Category not found");
    }

    return foundExhibitsPageData.config;
};

export const getReadMoreContent: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): ReadMoreContent => {
    // console.log("GET READMORE DATA");
    const foundExhibit = pagesData
        .find(({ category }) => category === exhibitsCategory)
        ?.config.exhibits.find(({ id }) => id === exhibitId);

    if (!foundExhibit) {
        throw new Error("Exhibit not found");
    }

    return {
        longDescription: foundExhibit.content.longDescription,
        images: foundExhibit.images,
    };
};

export const getCommentsContent: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): CommentsContent => {
    // console.log("GET COMMENTS DATA");
    const foundExhibit = pagesData
        .find(({ category }) => category === exhibitsCategory)
        ?.config.exhibits.find(({ id }) => id === exhibitId);

    if (!foundExhibit) {
        throw new Error("Exhibit not found");
    }

    return {
        modelPath: foundExhibit.modelPath,
        upperTitle: foundExhibit.content.upperTitle,
        title: foundExhibit.content.title,
    };
};
