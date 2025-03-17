import { useEffect } from "react";
import { useAppDispatch } from "@/app";
import { disableScroll, enableScroll } from "@/states/scrollSlice";

export const useScrollLockControl = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(disableScroll());

        return () => {
            dispatch(enableScroll());
        };
    }, [dispatch]);
};
