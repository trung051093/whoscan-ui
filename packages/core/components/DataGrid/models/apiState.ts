import { GridState } from "..";

export interface GridApiState {
    state: GridState
    setState?: (newState: GridState) => void;
}