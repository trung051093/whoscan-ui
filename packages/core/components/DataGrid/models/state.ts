import { GridColumn } from "./column";
import { GridRow, GridRowId, GridRowModel } from "./row";

export interface GridState {
    container: GridContainer;
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
    indexColumnsLookup: Map<number, GridColumn>
    fields: string[];
}

export interface GridPaginationState {
    page: number;
    pageSize: number;
}

export interface GridContainer {
    width: number;
    height: number;
}