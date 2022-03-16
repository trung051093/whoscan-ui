import React from "react";
import { BaseDivComponentProps } from "../models";
import { useGridRootProps } from "../hooks/useGridRootProps";
import { GridClassName } from "../constants";
import { useGridApiContext } from "../hooks";
import { gridAllRowsSelector } from "../hooks/row/gridRowSelector";

interface GridRootComponentProps extends BaseDivComponentProps {}

export const GridBodyComponent = ({}: GridRootComponentProps) => {
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const rows = gridAllRowsSelector(apiRef);
  const rowsRender: JSX.Element[] = [];

  for (let i = 0; i < rows.length; i++) {
    rowsRender.push(
      <rootProps.components.Row key={rows[i].id} rowId={rows[i].id} />
    );
  }

  return (
    <div className={GridClassName.Body} ref={ref}>
      {rowsRender}
    </div>
  );
};
