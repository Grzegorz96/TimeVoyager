import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { navLinkStyles, StyledNavLink } from "@/utils/styles";
import { type SignedInUser } from "@timevoyager/shared";
import { UserMenuContainer, StyledSignOutButton } from "./UserMenu.styles";
import { useSignOutMutation } from "@/services/api";
import { useAppDispatch } from "@/app";
import { clearUser } from "@/states/userSlice";
import { useNavigate } from "react-router-dom";
import { rtkQueryErrorSchema } from "@/schemas";
import { setNotification } from "@/states/notificationSlice";

export default function UserMenu({ user }: UserMenuProps) {
    const [signOut] = useSignOutMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut().unwrap();
            dispatch(clearUser());
            navigate("/");
        } catch (error) {
            const parsedError = rtkQueryErrorSchema.safeParse(error);

            if (!parsedError.success) {
                dispatch(
                    setNotification({
                        message: "An unknown error occurred",
                        status: 500,
                    })
                );
                return;
            }

            const { data } = parsedError.data;

            if (data.status === 401) {
                dispatch(clearUser());
                navigate("/");
            } else {
                dispatch(setNotification(data));
            }
        }
    };

    return (
        <UserMenuContainer>
            <StyledNavLink to="/profile" style={navLinkStyles} $padding="8px">
                <FontAwesomeIcon icon={faUser} />
                {user.username}
            </StyledNavLink>
            <StyledSignOutButton onClick={handleSignOut} $padding="8px">
                <FontAwesomeIcon icon={faRightFromBracket} />
            </StyledSignOutButton>
        </UserMenuContainer>
    );
}

type UserMenuProps = {
    user: SignedInUser;
};
