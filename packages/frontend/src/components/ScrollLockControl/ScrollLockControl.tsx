import { useAppSelector } from "@/app";
import { useEffect } from "react";

export default function ScrollLockControl() {
    const scrollLockCount = useAppSelector(
        ({ scroll }) => scroll.scrollLockCount
    );

    useEffect(() => {
        if (scrollLockCount > 0) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
    }, [scrollLockCount]);

    return null;
}
