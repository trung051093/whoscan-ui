import React from "react";
import { BaseDivComponentProps } from "../models";
import { useGridRootProps } from "../hooks/useGridRootProps";

interface GridRootComponentProps extends BaseDivComponentProps {}

export const GridRootComponent = React.forwardRef(
  ({ children }: GridRootComponentProps) => {
    const rootProps = useGridRootProps();

    return (
      <div>
        <rootProps.components.Header />
        <rootProps.components.Row />
        {children}
        <rootProps.components.Footer />
      </div>
    );
  }
);
