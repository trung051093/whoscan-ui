import React from 'react';
import { gridAllColumnsSelector, gridIndexColumnsLookupSelector } from "../column/gridColumnSelector";
import { gridAllRowsSelector, gridIndexRowsLookupSelector, gridRowHeightSelector } from "../row/gridRowSelector";
import { useGridApiContext } from "../useGridApiContext";

export function useGridVirtualization() {
  const apiRef = useGridApiContext();
  const rowHeight = gridRowHeightSelector(apiRef);
  const rows = gridAllRowsSelector(apiRef);
  const indexRowsLookup = gridIndexRowsLookupSelector(apiRef);
  const columns = gridAllColumnsSelector(apiRef);
  const indexColumnsLookup = gridIndexColumnsLookupSelector(apiRef);

  const containerWidth = React.useMemo(() => {
    if (!apiRef.current?.containerRef?.current) return apiRef.current.state.container.width
    return apiRef.current?.containerRef?.current?.clientWidth
  }, [apiRef.current?.containerRef])

  const containerHeight = React.useMemo(() => {
    if (!apiRef.current?.containerRef?.current) return apiRef.current.state.container.height
    return apiRef.current?.containerRef?.current?.clientHeight
  }, [apiRef.current?.containerRef])

  const findColumnWithIndex = (index: number) => indexColumnsLookup.get(index)

  const findRowWithIndex = (index: number) => indexRowsLookup.get(index)

  return {
    container: apiRef.current.state.container,
    rows,
    rowHeight,
    columns,
    containerWidth,
    containerHeight,
    findRowWithIndex,
    findColumnWithIndex
  }
}