import React from 'react'
import { TableContext } from "./Table.context"

export const useTableContext = () => {
    return React.useContext(TableContext)
}