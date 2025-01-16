import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import { type SignedInUser } from "@timevoyager/shared";
import { authSuccessResponseSchema } from "@timevoyager/shared";

type AuthState = {
    user: SignedInUser | null;
    isLoading: boolean;
    error: string | undefined;
};

const initialState: AuthState = {
    user: null,
    isLoading: true,
    error: undefined,
};

export const getAuthStatus = createAsyncThunk(
    "auth/getAuthStatus",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/auth/status", {
                method: "GET",
                credentials: "include",
            });

            if (response.status === 401) {
                return null;
            }

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();
            const parsedData = authSuccessResponseSchema.safeParse(data);

            if (!parsedData.success) {
                throw new Error("Invalid response data");
            }

            const { user } = parsedData.data;
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticatedUser: (state, action: PayloadAction<SignedInUser>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = undefined;
        },
        setUnAuthenticatedUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAuthStatus.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            state.isLoading = false;
        });

        builder.addCase(getAuthStatus.rejected, (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        });
    },
});

export const { setAuthenticatedUser, setUnAuthenticatedUser } =
    authSlice.actions;
export default authSlice.reducer;
