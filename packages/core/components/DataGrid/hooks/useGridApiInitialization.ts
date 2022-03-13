import React from "react"
import { GridApi } from "../models"
import { EventManager } from "../utils/eventManager";

let globalId = 0;
export const useGridApiInitialization = (
    inputApiRef: React.MutableRefObject<GridApi> | undefined,
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

    React.useImperativeHandle(inputApiRef, () => apiRef.current, [apiRef]);

    return apiRef
}