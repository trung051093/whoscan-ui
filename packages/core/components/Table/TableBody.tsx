import TableBody, { TableBodyProps } from "@mui/material/TableBody";
import { TableColumn, TypeKeyValue } from ".";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { DEFAULT_PRIMARY_KEY, DEFAULT_SHOW_SELECTION } from "./Table.constant";
import noop from "lodash/noop";

export interface CustomTableBodyProps extends TableBodyProps {
  rows: any;
  columns: TableColumn[];
  primaryKey?: string;
  showSelection?: boolean;
  rowSelected?: TypeKeyValue[];
  onSelectRow?: (row: any, checked: boolean) => void;
}

export function CustomTableBody({
  rows = [],
  columns = [],
  rowSelected = [],
  primaryKey = DEFAULT_PRIMARY_KEY,
  showSelection = DEFAULT_SHOW_SELECTION,
  onSelectRow = noop,
}: CustomTableBodyProps) {
  return (
    <TableBody>
      {rows.map((row: any, index: number) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          {showSelection && (
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={rowSelected.includes(row[primaryKey])}
                inputProps={{
                  "aria-labelledby": `enhanced-table-checkbox-${index}`,
                }}
                onChange={(_, checked) => onSelectRow(row, checked)}
              />
            </TableCell>
          )}
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.render ? column.render(row[column.id]) : row[column.id]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
