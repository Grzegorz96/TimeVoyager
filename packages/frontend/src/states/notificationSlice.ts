import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type BaseResponse } from "@timevoyager/shared";

type NotificationState = BaseResponse | null;

const notificationSlice = createSlice({
    name: "notification",
    initialState: null satisfies NotificationState as NotificationState,
    reducers: {
        setNotification: (_state, action: PayloadAction<BaseResponse>) =>
            action.payload,
        clearNotification: () => null,
    },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
