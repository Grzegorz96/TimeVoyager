import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, showToast } from "@/components/ui";
import type { BaseResponse, SignedInUser } from "@timevoyager/shared";
import { UserMenuContainer, SignOutButton } from "./UserMenu.styles";
import { useSignOutMutation, exhibitsApiSlice } from "@/services/api";
import { useAppDispatch } from "@/app";
import { useNavigate } from "react-router-dom";
import { setNotification } from "@/states/notificationSlice";
import { setUnAuthenticatedUser } from "@/states/authSlice";

export default function UserMenu({ user }: UserMenuProps) {
    const [signOut] = useSignOutMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            const result = await signOut().unwrap();

            showToast({
                message: result.message || "User signed out successfully",
                type: "success",
            });

            navigate("/");

            setTimeout(() => {
                dispatch(setUnAuthenticatedUser());
                dispatch(
                    exhibitsApiSlice.util.invalidateTags([
                        { type: "ExhibitsStats", id: "LIST" },
                    ])
                );
            }, 50);
        } catch (err) {
            const error = err as BaseResponse;

            if (error.status === 401) {
                showToast({
                    message: "Your session has expired. You were signed out.",
                    type: "info",
                });

                navigate("/");

                setTimeout(() => {
                    dispatch(setUnAuthenticatedUser());
                    dispatch(
                        exhibitsApiSlice.util.invalidateTags([
                            { type: "ExhibitsStats", id: "LIST" },
                        ])
                    );
                }, 50);
            } else {
                dispatch(setNotification(error));
            }
        }
    };

    return (
        <UserMenuContainer>
            <NavLink to="/profile" $padding="8px">
                <FontAwesomeIcon icon={faUser} />
                {user.username}
            </NavLink>
            <SignOutButton onClick={handleSignOut} $padding="8px">
                <FontAwesomeIcon icon={faRightFromBracket} />
            </SignOutButton>
        </UserMenuContainer>
    );
}

type UserMenuProps = {
    user: SignedInUser;
};
