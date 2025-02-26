import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { useGetExhibitsStatsQuery } from "@/services/api/exhibitsApiSlice";
import { type PageConfig } from "../types";

export const useExhibitsPageData = (): PageConfig => {
    const pageConfig = useLoaderData() as PageConfig;

    const { data: exhibitsStats } = useGetExhibitsStatsQuery(
        pageConfig.exhibits.map(({ id }) => id)
    );

    return useMemo(() => {
        if (!exhibitsStats) return pageConfig;

        const updatedExhibits = pageConfig.exhibits.map((exhibit) => {
            const exhibitStats = exhibitsStats.data.find(
                (stat) => stat.exhibitId === exhibit.id
            );

            return {
                ...exhibit,
                stats: exhibitStats
                    ? {
                          likeCount: exhibitStats.likeCount,
                          commentCount: exhibitStats.commentCount,
                      }
                    : undefined,
            };
        });

        return {
            ...pageConfig,
            exhibits: updatedExhibits,
        };
    }, [pageConfig, exhibitsStats]);
};
