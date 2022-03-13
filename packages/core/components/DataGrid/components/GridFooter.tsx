import React from "react";
import { useGridComponentProps } from "../hooks";

export const GridFooterComponent = React.forwardRef(() => {
  const componentProps = useGridComponentProps("Footer");
  return <div {...componentProps}>Footer</div>;
});

GridFooterComponent.displayName = "GridFooter";
