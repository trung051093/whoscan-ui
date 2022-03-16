import { GridColumn } from "./column";
import { GridRow, GridRowId, GridRowModel } from "./row";

export interface GridState {
    rows: GridRowState;
    columns: GridColumnState;
    pagination: GridPaginationState;
}

export interface GridRowState {
    all: GridRow[];
    rowIds: GridRowId[];
    idRowsLookup: Map<GridRowId, GridRowModel>;
    indexRowsLookup: Map<number, GridRowModel>;
    rowSelected: Array<GridRowId>;
    rowHeight: number;
}

export interface GridColumnState {
    all: GridColumn[];
    fieldColumnsLookup: Map<string, GridColumn>;
    fields: string[];
    totalColumnWidth: number
}

export interface GridPaginationState {
    page: number;
    pageSize: number;
}