import * as React from "react";
import { GridClassName } from "../constants";
import { useGridApiContext, useGridRootProps } from "../hooks";

export function GridHeaderPlaceholder() {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const headerRef = React.useRef<HTMLDivElement>(null);
  apiRef.current.headerRef = headerRef;

  return (
    <div ref={headerRef} className={GridClassName.HeaderContainer}>
      <rootProps.components.Header />
    </div>
  );
}
