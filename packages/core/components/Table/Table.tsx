import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { CustomTableHead } from "./TableHead";
import { CustomTableProps } from "./Table.model";
import noop from "lodash/noop";

export function CustomTable({
  stickyHeader = false,
  containerProps = {},
  columns = [],
  rows = [],
  totalRows = 0,
  rowsPerPageDefault = 10,
  rowsPerPageOptions = [10, 25, 100, 200, 500, 1000],
  pageDefault = 0,
  showSelection = false,
  showPagingnation = false,
  primaryKey = "id",
  fetchData = noop,
  onChangeSelect = noop,
  onReorderColumn = noop,
  onChangePage = noop,
  onChangeRowsPerPage = noop,
  ...props
}: CustomTableProps) {
  console.log({ columns, rows });
  const [rowSelected, setRowSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(pageDefault);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageDefault);

  React.useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  React.useEffect(() => {
    onChangeSelect(rowSelected);
  }, [rowSelected]);

  const hanleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    event?.preventDefault();
    setPage(newPage);
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event?.preventDefault();
    const rowPerPage = +event.target.value;
    setRowsPerPage(rowPerPage);
    setPage(0);
    onChangeRowsPerPage(rowPerPage);
    onChangePage(0);
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
            {rows.map((row: any, index: number) => {
              const isItemSelected = rowSelected.includes(row[primaryKey]);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={hanleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </React.Fragment>
  );
}
