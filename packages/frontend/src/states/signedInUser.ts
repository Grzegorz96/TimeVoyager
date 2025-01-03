import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SignedInUser = {
    username: string;
    email: string;
};

const initialState: SignedInUser | null = null;

// const signedInUserSlice = createSlice({
//     name: "signedInUser",
//     initialState,
//     reducers: {
//         setSignedInUser: (_state, action: PayloadAction<SignedInUser>) => {
//             return action.payload;
//         },
//         clearSignedInUser: () => null,
//     },
// });
