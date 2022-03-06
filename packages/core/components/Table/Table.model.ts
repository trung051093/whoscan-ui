export interface TableColumn {
    id: string;
    label: string;
    minWidth?: number;
    align?: "left" | "center" | "right" | "justify" | "inherit";
    render?: (item: any) => JSX.Element | string | number
}

export type TypeKeyValue = string | number