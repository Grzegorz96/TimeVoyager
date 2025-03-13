import { pagesData } from "@/pages/ExhibitsPage";
import { type LoaderFunction, redirect } from "react-router-dom";
import type {
    PageConfig,
    ReadMoreConfig,
    CommentsConfig,
    Exhibit,
} from "@/pages/ExhibitsPage/types";

const getExhibit = (
    exhibitsCategory: string | undefined,
    exhibitId: Exhibit["id"] | undefined
) => {
    return pagesData
        .find(({ category }) => category === exhibitsCategory)
        ?.config.exhibits.find(({ id }) => id === exhibitId);
};

export const getExhibitsPageConfig: LoaderFunction = ({
    params: { exhibitsCategory },
}): Response | PageConfig => {
    const foundExhibitsPageData = pagesData.find(
        ({ category }) => category === exhibitsCategory
    );

    if (!foundExhibitsPageData) {
        return redirect("/404");
    }

    return foundExhibitsPageData.config;
};

export const getReadMoreConfig: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): Response | ReadMoreConfig => {
    const foundExhibit = getExhibit(exhibitsCategory, exhibitId);

    if (!foundExhibit) {
        return redirect("/404");
    }

    return {
        longDescription: foundExhibit.content.longDescription,
        images: foundExhibit.images,
    };
};

export const getCommentsConfig: LoaderFunction = ({
    params: { exhibitsCategory, exhibitId },
}): Response | CommentsConfig => {
    const foundExhibit = getExhibit(exhibitsCategory, exhibitId);

    if (!foundExhibit) {
        return redirect("/404");
    }

    return {
        exhibitId: foundExhibit.id,
        modelPath: foundExhibit.modelPath,
        upperTitle: foundExhibit.content.upperTitle,
        title: foundExhibit.content.title,
    };
};
