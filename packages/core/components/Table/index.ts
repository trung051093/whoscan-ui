export * from './Table.model'
export * from './Table.constant'
import { CustomTableProps } from './Table'
import { CustomTableBodyProps } from './TableBody'
import { CustomTableHeadProps } from './TableHead'

export { CustomTableHead as TableHead } from './TableHead'
export { CustomTableBody as TableBody } from './TableBody'
export { CustomTablePagination as TablePagination } from './TablePagination'
export { CustomTable as Table } from './Table'

export interface TableProps extends CustomTableProps { }
export interface TableHeadProps extends CustomTableHeadProps { }
export interface TableBodyProps extends CustomTableBodyProps { }
