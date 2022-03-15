import { GridRow } from "./row";

export type GridSortDirection = 'asc' | 'desc';

export type GridColumnAlign = "left" | "center" | "right" | "justify" | "inherit"

export type GridColType = 'string'
    | 'number'
    | 'date'
    | 'dateTime'
    | 'boolean'
    | 'singleSelect'
    | 'actions'
    | string

export interface GridColumn {
    field: string
    label: string
    description?: string
    width?: number
    minWidth?: number
    align?: GridColumnAlign
    resizable?: boolean
    sortingOrder?: GridSortDirection
    pinnable?: boolean
    order?: number
    type?: GridColType
    render?: (item: GridRow) => JSX.Element
}