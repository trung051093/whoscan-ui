import * as React from "react";
import { GridClassName } from "../constants";
import { useGridApiContext, useGridRootProps } from "../hooks";

export function GridFooterPlaceholder() {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const footerRef = React.useRef<HTMLDivElement>(null);
  apiRef.current.footerRef = footerRef;

  if (rootProps.hideFooter) {
    return null;
  }

  return (
    <div ref={footerRef} className={GridClassName.FooterContainer}>
      <rootProps.components.Footer />
    </div>
  );
}
