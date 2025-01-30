import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, showToast } from "@/components/ui";
import { BaseResponse, type SignedInUser } from "@timevoyager/shared";
import { UserMenuContainer, SignOutButton } from "./UserMenu.styles";
import { useSignOutMutation } from "@/services/api";
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
            navigate("/");
            showToast({
                message: result.message || "User signed out successfully",
                type: "success",
            });
            setTimeout(() => dispatch(setUnAuthenticatedUser()), 0);
        } catch (err) {
            const error = err as BaseResponse;

            if (error.status === 401) {
                navigate("/");
                showToast({
                    message: "Your session has expired. You were signed out.",
                    type: "info",
                });
                setTimeout(() => dispatch(setUnAuthenticatedUser()), 0);
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
