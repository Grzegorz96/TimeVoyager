import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { baseResponseSchema } from "@timevoyager/shared";
import { useAppDispatch } from "@/app";
import { setNotification } from "@/states/notificationSlice";

export const useNotificationParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const allParams = Object.fromEntries(searchParams.entries());
        const parsedQueryParams = baseResponseSchema.safeParse(allParams);

        if (parsedQueryParams.success) {
            dispatch(setNotification(parsedQueryParams.data));
            setSearchParams(
                (prev) => {
                    prev.delete("message");
                    prev.delete("status");
                    return prev;
                },
                {
                    replace: true,
                }
            );
        }
    }, []);
};
