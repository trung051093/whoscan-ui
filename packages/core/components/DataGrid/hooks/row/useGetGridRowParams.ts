import { GridClassName } from "../../constants";
import { GridRow, GridRowId } from "../../models";
import { useGridApiContext } from "../useGridApiContext";
import { gridRowHeightSelector, gridRowsLookupSelector } from "./gridRowSelector";

export function useGetGridRowParams(rowId: GridRowId) {
    const apiRef = useGridApiContext();
    const idRowsLookup = gridRowsLookupSelector(apiRef)
    const rowHeight = gridRowHeightSelector(apiRef)
    const row = idRowsLookup.get(rowId) as GridRow;

    const rowProps = {
        key: `row-${rowId}`,
        id: rowId as string,
        style: {
            height: `${rowHeight}px`,
        },
        className: GridClassName.BodyRow,
    };

    return {
        rowProps,
        row,
    }
}