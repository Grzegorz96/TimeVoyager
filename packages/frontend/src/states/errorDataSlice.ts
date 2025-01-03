import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type BaseResponse } from "@timevoyager/shared";

type ErrorDataState = {
    message: null | string;
    status: null | number;
};

const initialState: ErrorDataState = {
    message: null,
    status: null,
};

const errorDataSlice = createSlice({
    name: "errorData",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<BaseResponse>) {
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        clearError(state) {
            state.message = null;
            state.status = null;
        },
    },
});

export const { setError, clearError } = errorDataSlice.actions;
export default errorDataSlice.reducer;
