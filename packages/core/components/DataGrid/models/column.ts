export type GridColumnId = string | number

export type GridColumnAlign = "left" | "center" | "right" | "justify" | "inherit"

export interface GridColumn {
    id: GridColumnId
    label: string
    width?: number
    align?: GridColumnAlign
    order?: number
    render?: () => JSX.Element
}