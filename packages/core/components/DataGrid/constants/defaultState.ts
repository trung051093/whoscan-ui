import { GridColumn, GridRowId, GridRowModel, GridState } from "../models";

export const DEFAULT_STATE: GridState = {
    rows: {
        all: [],
        rowIds: [],
        idRowsLookup: new Map<GridRowId, GridRowModel>(),
        rowSelected: [],
        rowHeight: 52
    },
    columns: {
        all: [],
        fieldColumnsLookup: new Map<string, GridColumn>(),
        fields: []
    },
    pagination: {
        page: 1,
        pageSize: 100
    }
}