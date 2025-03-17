import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scrollLockCount: 0,
};

const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        disableScroll: (state) => {
            state.scrollLockCount += 1;
        },
        enableScroll: (state) => {
            state.scrollLockCount -= 1;
        },
    },
});

export const { disableScroll, enableScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
