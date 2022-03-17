import { GridColumn, GridRowId, GridRowModel, GridState } from "../models";
import { DEFAULT_GRID_CONTAINER } from "./defaultGridContainer";

export const DEFAULT_STATE: GridState = {
    container: {
        ...DEFAULT_GRID_CONTAINER
    },
    rows: {
        all: [],
        rowIds: [],
        idRowsLookup: new Map<GridRowId, GridRowModel>(),
        indexRowsLookup: new Map<number, GridRowModel>(),
        rowSelected: [],
        rowHeight: 52
    },
    columns: {
        all: [],
        fieldColumnsLookup: new Map<string, GridColumn>(),
        indexColumnsLookup: new Map<number, GridColumn>(),
        fields: [],
    },
    pagination: {
        page: 1,
        pageSize: 100
    }
}