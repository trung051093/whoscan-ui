import React from "react"
import { GridApiContext } from "../contexts"
import { GridApi } from "../models"

export const useGridApiContext = () => {
    const apiRef = React.useContext(GridApiContext)
    if (!apiRef?.current) {
        console.warn("apiRef not found")
    }
    return apiRef as React.MutableRefObject<GridApi>
}