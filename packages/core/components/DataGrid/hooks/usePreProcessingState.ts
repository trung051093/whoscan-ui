import React from "react";
import { DEFAULT_STATE } from "../constants";
import { DataGridProps, GridApi, GridState } from "../models";
import { convertColumnssPropsToState } from "./column/utils";
import { convertRowsPropsToState } from "./row/utils";

export const usePreProcessingState = (apiRef: React.MutableRefObject<GridApi>, props: DataGridProps) => {
    React.useEffect(() => {
        if (!apiRef.current) return;
        console.log("usePreProcessingState:", apiRef.current);
        apiRef.current.state = {
            ...DEFAULT_STATE,
            rows: {
                ...DEFAULT_STATE.rows,
                ...convertRowsPropsToState(props.rows)
            },
            columns: {
                ...DEFAULT_STATE.columns,
                ...convertColumnssPropsToState(props.columns)
            }
        }
    }, [props])

    const setState = React.useCallback((state: GridState) => {
        apiRef.current.state = state
    }, [])

    apiRef.current.setState = setState
}