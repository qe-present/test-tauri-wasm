import {ReactElement} from "react";

export interface MenuItem{
    text: string;
    path: string;
    icon: ReactElement
}
export type MenuItems = MenuItem[];