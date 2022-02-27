import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import CustomTableHead from "./TableHead";
import { CustomTableProps } from "./Table.model";
import noop from "lodash/noop";

export default function CustomTable({
  stickyHeader = false,
  containerProps = {},
  columns = [],
  rows = [],
  rowsPerPageDefault = 10,
  rowsPerPageOptions = [10, 25, 100],
  pageDefault = 0,
  showSelection = false,
  showPagingnation = false,
  primaryKey = "id",
  fetchData = noop,
  onChangeSelect = noop,
  onReorderColumn = noop,
  ...props
}: CustomTableProps) {
  const [rowSelected, setRowSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(pageDefault);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageDefault);

  React.useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  React.useEffect(() => {
    onChangeSelect(rowSelected);
  }, [rowSelected]);

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    event?.preventDefault();
    setPage(newPage);
  };

  const onChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event?.preventDefault();
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onSelect = (row: any, checked: boolean) => {
    const rowId = row[primaryKey] as string;
    if (checked) {
      setRowSelected(rowSelected.concat([rowId]));
    } else {
      setRowSelected(rowSelected.filter((id) => id !== rowId));
    }
  };

  const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row: any) => row[primaryKey]);
      setRowSelected(newSelecteds);
      return;
    }
    setRowSelected([]);
  };

  return (
    <React.Fragment>
      <TableContainer {...containerProps}>
        <Table stickyHeader={stickyHeader} {...props}>
          <CustomTableHead
            columns={columns}
            numSelected={rowSelected.length}
            rowCount={rows.length}
            showSelection={showSelection}
            onSelectAll={onSelectAll}
            onReorderColumn={onReorderColumn}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => {
                const isItemSelected = rowSelected.includes(row[primaryKey]);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row[primaryKey]}
                  >
                    {showSelection && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          onChange={(_, checked) => onSelect(row, checked)}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.render ? column.render(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagingnation && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      )}
    </React.Fragment>
  );
}
