import React from "react";
import { useGridComponentProps } from "../hooks";

export const GridRowComponent = React.forwardRef(() => {
  const componentProps = useGridComponentProps("Row");
  return <div {...componentProps}>Row</div>;
});

GridRowComponent.displayName = "GridRow";
