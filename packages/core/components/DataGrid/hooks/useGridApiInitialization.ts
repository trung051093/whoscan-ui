import React from "react"
import { DataGridProps, GridApi } from "../models"
import { EventManager } from "../utils/eventManager";
import { usePreProcessingState } from "./usePreProcessingState";

let globalId = 0;
export const useGridApiInitialization = (
    inputApiRef: React.MutableRefObject<GridApi> | undefined,
    props: DataGridProps
) => {
    const apiRef = React.useRef() as React.MutableRefObject<GridApi>

    if (!apiRef.current) {
        apiRef.current = {
            unstable_eventManager: new EventManager(),
            state: {} as GridApi['state'],
            instanceId: globalId,
        } as GridApi;

        globalId += 1;
    }

    usePreProcessingState(apiRef, props)
    React.useImperativeHandle(inputApiRef, () => apiRef.current, [apiRef]);

    return apiRef
}