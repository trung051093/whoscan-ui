import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export interface CustomDataGridProps extends DataGridProps {}

export function CustomDataGrid({ ...props }: CustomDataGridProps) {
  return <DataGrid {...props} />;
}
