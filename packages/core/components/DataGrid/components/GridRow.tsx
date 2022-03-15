import classNames from "classnames";
import { GridClassName } from "../constants";
import { useGridComponentProps, useGridRootProps } from "../hooks";
import { useGetGridRowParams } from "../hooks/row/useGetGridRowParams";
import { BaseDivComponentProps, GridRowId } from "../models";

export interface GridRowComponentProps extends BaseDivComponentProps {
  rowId: GridRowId;
  rowHeight?: number;
  rowWidth?: number;
}

export const GridRowComponent = ({
  rowId,
  ...otherProps
}: GridRowComponentProps) => {
  const rootProps = useGridRootProps();
  const componentProps = useGridComponentProps("Row");
  const { row, rowProps } = useGetGridRowParams(rowId);
  const columns = rootProps.columns || [];
  const cells: JSX.Element[] = [];

  for (let i = 0; i < columns.length; i++) {
    const cellProps = {
      key: `row-${row.id}-cell-${i}`,
      children: row[columns[i].field] || null,
      className: GridClassName.BodyCell,
    };
    cells.push(<rootProps.components.Cell {...cellProps} />);
  }

  return (
    <div
      {...componentProps}
      {...otherProps}
      {...rowProps}
      className={classNames(componentProps.className, otherProps.className)}
    >
      {cells}
    </div>
  );
};

GridRowComponent.displayName = "GridRow";
