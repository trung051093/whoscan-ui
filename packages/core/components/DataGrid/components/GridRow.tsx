import { useGridComponentProps, useGridRootProps } from "../hooks";

export const GridRowComponent = () => {
  const rootProps = useGridRootProps();
  const componentProps = useGridComponentProps("Row");

  const rows = rootProps.rows || [];
  const columns = rootProps.columns || [];
  const rowsRender: any[] = []
  let cells: any[] = []
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      const cellProps = {
        key: `row-${i} cell-${j}`,
        children: rows[i][columns[j].id]
      }
      cells.push(
        <rootProps.components.Cell {...cellProps} />
      )
    }
    rowsRender.push(cells)
    cells = []
  }

  return <div {...componentProps}>
    {rowsRender}
  </div>;
};

GridRowComponent.displayName = "GridRow";
