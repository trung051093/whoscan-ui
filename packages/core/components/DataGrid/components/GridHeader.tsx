import React from "react";
import { GridClassName } from "../constants";
import { useGridComponentProps, useGridRootProps } from "../hooks";

export const GridHeaderComponent = React.forwardRef(() => {
  const rootProps = useGridRootProps();
  const componentProps = useGridComponentProps("Header");
  return (
    <div {...componentProps}>
      {rootProps.columns?.map((column, index) => (
        <rootProps.components.Cell
          className={GridClassName.HeaderCell}
          key={`header_cell_${index}`}
        >
          {column.label}
        </rootProps.components.Cell>
      ))}
    </div>
  );
});

GridHeaderComponent.displayName = "GridHeader";
