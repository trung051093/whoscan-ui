import React from "react";
import { BaseDivComponentProps } from "../models";
import { GridClassName } from "../constants";
import { GridBodyComponent as GridBody } from "./GridBody";
import { GridFooterPlaceholder } from "./GridFooterPlaceholder";
import { GridHeaderPlaceholder } from "./GridHeaderPlaceholder";

interface GridRootComponentProps extends BaseDivComponentProps {}

export const GridRootComponent = React.forwardRef<
  HTMLDivElement,
  GridRootComponentProps
>(({ children }, ref) => {
  return (
    <div className={GridClassName.Root} ref={ref}>
      <GridHeaderPlaceholder />
      <GridBody />
      {children}
      <GridFooterPlaceholder />
    </div>
  );
});
