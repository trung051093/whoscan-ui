import classNames from "classnames"
import React from "react"
import { GridClassName } from "../constants"
import { BaseDivComponentProps, GridSlotsComponent } from "../models"
import { useGridRootProps } from "./useGridRootProps"

export const useGridComponentProps = (name: keyof GridSlotsComponent, otherProps?: BaseDivComponentProps) => {
    const rootProps = useGridRootProps()
    const componentProps = rootProps.componentsProps?.[name]
    const defaultClassName = GridClassName[name]

    const className = React.useMemo(() => classNames(defaultClassName, otherProps?.className, componentProps?.className),
        [componentProps?.className, otherProps?.className])

    return React.useMemo(() => ({
        ...componentProps,
        className
    }), [componentProps])
}