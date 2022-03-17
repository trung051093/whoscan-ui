import React from "react";
import { BaseDivComponentProps } from "../models";
import { GridClassName } from "../constants";
import { GridBodyComponent as GridBody } from "./GridBody";
import { GridFooterPlaceholder } from "./GridFooterPlaceholder";
import { GridHeaderPlaceholder } from "./GridHeaderPlaceholder";
import { useGridApiContext } from "../hooks";

interface GridRootComponentProps extends BaseDivComponentProps { }

export const GridRootComponent = ({
  children,
  ...otherProps
}: GridRootComponentProps) => {
  const apiRef = useGridApiContext();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  apiRef.current.rootRef = rootRef;
  apiRef.current.containerRef = containerRef;

  React.useEffect(() => {
    if (!containerRef.current) return

    

  }, [containerRef])

  return (
    <div {...otherProps} className={GridClassName.Root} ref={rootRef}>
      <div className={GridClassName.Container} ref={containerRef}>
        <GridHeaderPlaceholder />
        <GridBody />
        {children}
      </div>
      <GridFooterPlaceholder />
    </div>
  );
};
