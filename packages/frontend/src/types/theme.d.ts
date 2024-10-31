import "styled-components";
import { Theme } from "@/utils/styles/themes";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
