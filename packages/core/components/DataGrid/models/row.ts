export type GridRowId = string | number

export interface GridRow extends Record<string, any> {
    id: GridRowId
}