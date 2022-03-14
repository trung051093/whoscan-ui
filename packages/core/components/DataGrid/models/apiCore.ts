export interface GridApiCore {
    state: any
    instanceId: number
    /**
     * The React ref of the grid header element.
     *  @ignore - do not document.
     */
    headerRef?: React.RefObject<HTMLDivElement>;
    /**
     * The React ref of the grid footer element.
     * @ignore - do not document.
     */
    footerRef?: React.RefObject<HTMLDivElement>;
}