import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { useGetExhibitsStatsQuery } from "@/services/api";
import { type PageConfig } from "@/pages/ExhibitsPage/types";

export const useExhibitsPageData = (): PageConfig => {
    const pageConfig = useLoaderData() as PageConfig;

    const { data: exhibitsStats } = useGetExhibitsStatsQuery(
        pageConfig.exhibits.map(({ id }) => id)
    );

    return useMemo(() => {
        if (!exhibitsStats) return pageConfig;

        const statsMap = new Map(
            exhibitsStats.data.map(({ exhibitId, ...stat }) => [
                exhibitId,
                stat,
            ])
        );

        return {
            ...pageConfig,
            exhibits: pageConfig.exhibits.map((exhibit) => ({
                ...exhibit,
                stats: statsMap.get(exhibit.id),
            })),
        };
    }, [pageConfig, exhibitsStats]);
};
