import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type SignedInUser } from "@timevoyager/shared";

type UserState = SignedInUser | null;

const userSlice = createSlice({
    name: "user",
    initialState: null satisfies UserState as UserState,
    reducers: {
        setUser: (_state, action: PayloadAction<SignedInUser>) =>
            action.payload,
        clearUser: () => null,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
