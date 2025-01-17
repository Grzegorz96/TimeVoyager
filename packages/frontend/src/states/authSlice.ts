import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import {
    baseResponseSchema,
    type SignedInUser,
    type AuthSuccessResponse,
} from "@timevoyager/shared";
import { setNotification } from "./notificationSlice";

type AuthState = {
    user: SignedInUser | null;
    isLoading: boolean;
};

const initialState: AuthState = {
    user: null,
    isLoading: true,
};

export const getAuthStatus = createAsyncThunk<SignedInUser | null, void>(
    "auth/getAuthStatus",
    async (_, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetch("/api/auth/status", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const data: AuthSuccessResponse = await response.json();
                return fulfillWithValue(data.user);
            } else if (response.status === 401) {
                return fulfillWithValue(null);
            } else {
                console.log(response);
                throw await response.json().catch(() => ({
                    message: "An error occurred while fetching user status",
                    status: 500,
                }));
            }
        } catch (error: unknown) {
            console.log(error);
            const parsedError = baseResponseSchema.safeParse(error);

            if (parsedError.success) {
                dispatch(setNotification(parsedError.data));
            } else {
                dispatch(
                    setNotification({
                        message: "An error occurred while fetching user status",
                        status: 500,
                    })
                );
            }

            throw {
                message: "An error occurred while fetching user status",
                status: 500,
            };
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticatedUser: (state, action: PayloadAction<SignedInUser>) => {
            state.user = action.payload;
        },
        setUnAuthenticatedUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAuthStatus.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });

        builder.addCase(getAuthStatus.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { setAuthenticatedUser, setUnAuthenticatedUser } =
    authSlice.actions;
export default authSlice.reducer;
