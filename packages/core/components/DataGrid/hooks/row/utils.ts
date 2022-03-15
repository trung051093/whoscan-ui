import { GridRow, GridRowId, GridRowModel } from "../../models";

export function convertRowsPropsToState(rows: GridRow[] = []): {
    all: GridRow[];
    rowIds: GridRowId[];
    idRowsLookup: Map<GridRowId, GridRowModel>;
} {
    const idRowsLookup = new Map<GridRowId, GridRowModel>();
    const rowIds: GridRowId[] = [];
    for (let i = 0; i < rows.length; i++) {
        const rowId = rows[i].id;
        idRowsLookup.set(rowId, rows[i]);
        rowIds.push(rowId);
    }

    return {
        all: rows,
        idRowsLookup,
        rowIds
    };
}