import React from 'react'
import {
    DEFAULT_PRIMARY_KEY,
    DEFAULT_PAGE,
    DEFAULT_ROWS_PER_PAGE,
    DEFAULT_MAX_WIDTH,
    DEFAULT_MAX_HEIGHT,
} from "./Table.constant";
import noop from "lodash/noop";
import { TableColumn } from '.';

type TypeTableContext = {
    width: number
    height: number
    columns: TableColumn[]
    rows: Array<object>
    primaryKey: string
    rowSelected: Array<string | number>;
    page: number;
    pageSize: number;
    onSelectRow: (row: object, checked: boolean) => void
    onChangePage: (row: object, checked: boolean) => void
    onChangePageSize: (row: object, checked: boolean) => void
}

export const DefaultTableContext = {
    columns: [],
    rows: [],
    width: DEFAULT_MAX_WIDTH,
    height: DEFAULT_MAX_HEIGHT,
    primaryKey: DEFAULT_PRIMARY_KEY,
    rowSelected: [],
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_ROWS_PER_PAGE,
    onSelectRow: noop,
    onChangePage: noop,
    onChangePageSize: noop
}

export const TableContext = React.createContext<TypeTableContext>(DefaultTableContext)

export const getTableContext = () => TableContext
