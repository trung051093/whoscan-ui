import React from "react";
import { BaseDivComponentProps } from "../models";
import { useGridRootProps } from "../hooks/useGridRootProps";
import { GridClassName } from "../constants";

interface GridRootComponentProps extends BaseDivComponentProps {}

export const GridBodyComponent = React.forwardRef<
  HTMLDivElement,
  GridRootComponentProps
>(({}: GridRootComponentProps, ref) => {
  const rootProps = useGridRootProps();

  return (
    <div className={GridClassName.Body} ref={ref}>
      <rootProps.components.Row />
    </div>
  );
});
