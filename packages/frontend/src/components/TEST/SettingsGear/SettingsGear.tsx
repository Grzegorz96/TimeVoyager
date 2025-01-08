import { useState } from "react";
import { toggleThemeMode } from "@/states/themeSlice";
import { useAppDispatch } from "@/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
    GearButton,
    SettingsContainer,
    ToogleThemeButton,
} from "./SettingsGear.styles";

export default function SettingsGear() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    return (
        <>
            <GearButton onClick={() => setIsOpened((prevState) => !prevState)}>
                <FontAwesomeIcon icon={faGear} />
            </GearButton>
            {isOpened && (
                <SettingsContainer>
                    <ToogleThemeButton
                        onClick={() => dispatch(toggleThemeMode())}
                    >
                        Toogle theme
                    </ToogleThemeButton>
                </SettingsContainer>
            )}
        </>
    );
}
