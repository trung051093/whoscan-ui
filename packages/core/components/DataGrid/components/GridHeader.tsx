import React from "react";
import { useGridComponentProps, useGridRootProps } from "../hooks";

export const GridHeaderComponent = React.forwardRef(() => {
  const rootProps = useGridRootProps();
  const componentProps = useGridComponentProps("Header");
  return (
    <div {...componentProps}>
      {rootProps.columns?.map((column, index) => (
        <rootProps.components.Cell
          className="grid-header__cell"
          key={`header_cell_${index}`}
        >
          {column.render ? column.render() : column.label}
        </rootProps.components.Cell>
      ))}
    </div>
  );
});

GridHeaderComponent.displayName = "GridHeader";
