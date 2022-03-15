import React from "react";
import { DEFAULT_SLOTS_COMPONENTS, DEFAULT_LOCALE_TEXT, DEFAULT_STATE } from "../constants";
import { DataGridProps, GridProcessedProps } from "../models";
import { convertColumnssPropsToState } from "./column/utils";
import { convertRowsPropsToState } from "./row/utils";

export const usePreProcessingProps = (props: DataGridProps): GridProcessedProps => {

    const localeText = React.useMemo(
        () => ({ ...DEFAULT_LOCALE_TEXT, ...props.localeText }),
        [props.localeText],
    );

    const components = React.useMemo(
        () => ({ ...DEFAULT_SLOTS_COMPONENTS, ...props.components }),
        [props.components],
    );

    const state = React.useMemo(
        () => ({
            ...DEFAULT_STATE,
            rows: {
                ...DEFAULT_STATE.rows,
                ...convertRowsPropsToState(props.rows)
            },
            columns: {
                ...DEFAULT_STATE.columns,
                ...convertColumnssPropsToState(props.columns)
            }
        }),
        [props],
    );

    return React.useMemo<GridProcessedProps>(() => ({
        ...props,
        localeText,
        components,
        state
    }), [components, localeText])
}