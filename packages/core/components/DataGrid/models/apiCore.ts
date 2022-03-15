import { GridState } from "./state";

export interface GridApiCore {
    state: GridState;
    instanceId: number;
    headerRef?: React.RefObject<HTMLDivElement>;
    footerRef?: React.RefObject<HTMLDivElement>;
    rootRef?: React.RefObject<HTMLDivElement>;
    containerRef?: React.RefObject<HTMLDivElement>;
}