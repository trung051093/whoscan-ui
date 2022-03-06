import React from "react";
import Table, { TableProps } from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import TableContainer, {
  TableContainerProps,
} from "@mui/material/TableContainer";
import { TableColumn, TableHead, TablePagination, TableBody } from ".";

import noop from "lodash/noop";
import {
  DEFAULT_PRIMARY_KEY,
  DEFAULT_STICKY_HEADER,
  DEFAULT_SHOW_SELECTION,
  DEFAULT_SHOW_PAGINATION,
  DEFAULT_PAGE,
  DEFAULT_TOTAL_ROWS,
  DEFAULT_ROWS_PER_PAGE,
  DEFAULT_ROWS_PER_PAGE_OPTIONS,
} from "./Table.constant";

import { TypeKeyValue } from "./Table.model";

export interface CustomTableProps extends TableProps {
  columns: TableColumn[];
  rows: any;
  totalRows?: number;
  pageDefault?: number;
  rowsPerPageDefault?: number;
  rowsPerPageOptions?: number[];
  containerProps?: TableContainerProps;
  stickyHeader?: boolean;
  showSelection?: boolean;
  showPagingnation?: boolean;
  primaryKey?: string;
  isHeadSortDnd?: boolean;
  onReorderColumn?: (columns: TableColumn[]) => void;
  onChangeSelect?: (selected: TypeKeyValue[]) => void;
  onChangePage?: (page: number) => void;
  onChangeRowsPerPage?: (rowPerPage: number) => void;
  fetchData?: (page?: number, limit?: number) => void;
}

export function CustomTable({
  stickyHeader = DEFAULT_STICKY_HEADER,
  containerProps = {},
  columns = [],
  rows = [],
  totalRows = DEFAULT_TOTAL_ROWS,
  rowsPerPageDefault = DEFAULT_ROWS_PER_PAGE,
  rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS,
  pageDefault = DEFAULT_PAGE,
  showSelection = DEFAULT_SHOW_SELECTION,
  showPagingnation = DEFAULT_SHOW_PAGINATION,
  primaryKey = DEFAULT_PRIMARY_KEY,
  fetchData = noop,
  onChangeSelect = noop,
  onReorderColumn = noop,
  onChangePage = noop,
  onChangeRowsPerPage = noop,
  ...props
}: CustomTableProps) {
  if (rows.length > 0 && typeof rows[0][primaryKey]) {
    console.warn(`Type of value "${primaryKey}" must be string or number`);
  }
  const [rowSelected, setRowSelected] = React.useState<Array<TypeKeyValue>>([]);
  const [page, setPage] = React.useState(pageDefault);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageDefault);

  React.useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  React.useEffect(() => {
    onChangeSelect(rowSelected);
  }, [rowSelected]);

  const hanleChangePage = (newPage: number) => {
    setPage(newPage);
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    onChangeRowsPerPage(newRowsPerPage);
    setPage(pageDefault);
    onChangePage(pageDefault);
  };

  const onSelect = (index: number, checked: boolean) => {
    const rowId = rows[index][primaryKey] as TypeKeyValue;
    if (checked) {
      setRowSelected([...rowSelected, rowId]);
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
      <Stack direction="column" spacing={2}>
        <TableContainer {...containerProps}>
          <Table stickyHeader={stickyHeader} {...props}>
            <TableHead
              columns={columns}
              numSelected={rowSelected.length}
              rowCount={rows.length}
              showSelection={showSelection}
              onSelectAll={onSelectAll}
              onReorderColumn={onReorderColumn}
            />
            <TableBody
              columns={columns}
              rows={rows}
              rowSelected={rowSelected}
              primaryKey={primaryKey}
              showSelection={showSelection}
              onSelectRow={onSelect}
            />
          </Table>
        </TableContainer>
        {showPagingnation && (
          <TablePagination
            total={totalRows}
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={hanleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Stack>
    </React.Fragment>
  );
}
