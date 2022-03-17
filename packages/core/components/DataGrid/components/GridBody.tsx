import { BaseDivComponentProps } from "../models";
import { useGridRootProps } from "../hooks/useGridRootProps";
import { GridClassName } from "../constants";
import { VariableSizeGrid as Grid } from 'react-window';
import { useGridVirtualization } from "../hooks/virtualization/useGridVirtualization";

interface GridRootComponentProps extends BaseDivComponentProps { }

export const GridBodyComponent = ({ }: GridRootComponentProps) => {
  const rootProps = useGridRootProps();
  const { container,rows, columns, rowHeight, findRowWithIndex, findColumnWithIndex } = useGridVirtualization();

  const renderCell = (props: any) => {
    const { rowIndex, columnIndex, style } = props;
    const row = findRowWithIndex(rowIndex)
    const cellProps = {
      key: `row-${rowIndex}-cell-${columnIndex}`,
      children: row?.[columns[columnIndex].field] || null,
      className: GridClassName.BodyCell,
      style: style
    };
    return <rootProps.components.Cell {...cellProps} rowId={row?.id} style={style} />
  }

  return (
    <Grid className={GridClassName.Body}
      columnCount={columns.length}
      columnWidth={(index) => findColumnWithIndex(index)?.width || 0}
      rowCount={rows.length}
      rowHeight={(_) => rowHeight}
      height={container.height}
      width={container.width}
    >
      {renderCell}
    </Grid>
  );
};
