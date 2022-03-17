import React from "react";
import { DEFAULT_SLOTS_COMPONENTS, DEFAULT_LOCALE_TEXT } from "../constants";
import { DataGridProps, GridProcessedProps } from "../models";

export const usePreProcessingProps = (props: DataGridProps): GridProcessedProps => {

    const localeText = React.useMemo(
        () => ({ ...DEFAULT_LOCALE_TEXT, ...props.localeText }),
        [props.localeText],
    );

    const components = React.useMemo(
        () => ({ ...DEFAULT_SLOTS_COMPONENTS, ...props.components }),
        [props.components],
    );

    return React.useMemo<GridProcessedProps>(() => ({
        ...props,
        localeText,
        components,
    }), [components, localeText])
}