import { SignedInUser } from "@timevoyager/shared";

export type AuthState = {
    user: SignedInUser | null;
    isLoading: boolean;
};
