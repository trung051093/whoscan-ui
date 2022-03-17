export interface GridApiCore {
    instanceId: number;
    headerRef?: React.RefObject<HTMLDivElement>;
    footerRef?: React.RefObject<HTMLDivElement>;
    rootRef?: React.RefObject<HTMLDivElement>;
    containerRef?: React.RefObject<HTMLDivElement>;
}