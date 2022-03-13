import React from "react"
import { GridSlotsComponent } from "../models"
import { composeClassName } from "../utils/classes"
import { useGridRootProps } from "./useGridRootProps"

export const useGridComponentProps = (name: keyof GridSlotsComponent) => {
    const rootProps = useGridRootProps()
    const componentProps = rootProps.componentsProps?.[name]

    const className = React.useMemo(() => composeClassName(name, componentProps?.className), [componentProps])
    console.log("className", className)
    return React.useMemo(() => ({
        ...componentProps,
        className
    }), [componentProps])
}