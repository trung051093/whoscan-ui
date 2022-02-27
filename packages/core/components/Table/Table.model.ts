import { TableContainerProps } from "@mui/material/TableContainer";
import { TableProps } from "@mui/material/Table";
import { TableHeadProps } from "@mui/material/TableHead";
import { Direction, DroppableMode } from "react-beautiful-dnd";

export interface TableColumn {
    id: string;
    label: string;
    minWidth?: number;
    align?: "left" | "center" | "right" | "justify" | "inherit";
    render?: (item: any) => JSX.Element | string | number
}

export interface CustomTableProps extends TableProps {
    columns: TableColumn[];
    rows: any;
    pageDefault?: number;
    rowsPerPageDefault?: number;
    rowsPerPageOptions?: number[];
    containerProps?: TableContainerProps;
    stickyHeader?: boolean;
    showSelection?: boolean;
    showPagingnation?: boolean;
    primaryKey?: string;
    isHeadSortDnd?: boolean;
    onReorderColumn: (columns: TableColumn[]) => void;
    onChangeSelect?: (selected: string[]) => void;
    fetchData?: (page?: number, limit?: number) => void;
}

export interface CustomTableHeadProps extends TableHeadProps {
    columns: TableColumn[];
    numSelected?: number;
    rowCount?: number;
    showSelection?: boolean;
    primaryKey?: string;
    onSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // for drag and drop
    isDnD?: boolean;
    internalScroll?: boolean;
    droppableId?: string;
    direction?: Direction;
    mode?: DroppableMode;
    itemIdPrefix?: string
    onReorderColumn: (columns: TableColumn[]) => void;
}
