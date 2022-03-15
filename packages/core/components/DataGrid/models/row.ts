export type GridRowId = string | number

export type GridRowModel = {
    id: GridRowId
    [field: string]: any
}

export type GridRow = GridRowModel

export type GridRowLookup = Map<GridRowId, GridRowModel>