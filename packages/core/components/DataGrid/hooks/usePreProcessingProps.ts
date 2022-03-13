import React from "react";
import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS, GRID_DEFAULT_LOCALE_TEXT } from "../constants";
import { DataGridProps, GridProcessedProps } from "../models";

export const usePreProcessingProps = (props: DataGridProps): GridProcessedProps => {

    const localeText = React.useMemo(
        () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...props.localeText }),
        [props.localeText],
    );

    const components = React.useMemo(
        () => ({ ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS, ...props.components }),
        [props.components],
    );

    return React.useMemo<GridProcessedProps>(() => ({
        ...props,
        localeText,
        components
    }), [components, localeText])
}