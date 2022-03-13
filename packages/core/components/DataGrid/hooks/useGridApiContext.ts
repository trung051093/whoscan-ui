import React from "react"
import { GridApiContext } from "../contexts"

export const useGridApiContext = () => {
    const apiRef = React.useContext(GridApiContext)
    return apiRef
}