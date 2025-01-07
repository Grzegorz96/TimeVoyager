import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type BaseResponse } from "@timevoyager/shared";

type ErrorState = BaseResponse | null;

const errorSlice = createSlice({
    name: "error",
    initialState: null satisfies ErrorState as ErrorState,
    reducers: {
        setError: (_state, action: PayloadAction<BaseResponse>) =>
            action.payload,
        clearError: () => null,
    },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
