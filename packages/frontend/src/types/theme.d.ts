import "styled-components";
import { Theme } from "@/utils/styles";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
