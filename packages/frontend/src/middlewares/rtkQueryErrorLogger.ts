import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware = (_api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        console.error(action.payload);
    }

    return next(action);
};
