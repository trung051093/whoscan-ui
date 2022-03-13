import classNames from "classnames";
import { DEFAULT_GRID_CLASS_NAME } from "../constants";
import { GridSlotsComponent } from "../models";

export function composeClassName(name: keyof GridSlotsComponent, ...agrument: Array<string | undefined>): string {
    return classNames(DEFAULT_GRID_CLASS_NAME[name], ...agrument)
}