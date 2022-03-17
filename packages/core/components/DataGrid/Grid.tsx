import { GridRootComponent as GridRoot } from "./components/GridRoot";
import { GridContextProvider } from "./components/GridContextProvider";
import { useGridApiInitialization, usePreProcessingProps } from "./hooks";
import { DataGridProps } from "./models";
import "./css/grid.css";

export function DataGrid({ ...props }: DataGridProps) {
  const apiRef = useGridApiInitialization(undefined, props);
  const propsProcessed = usePreProcessingProps(props);
  console.log("apiRef: ", apiRef)

  return (
    <GridContextProvider apiRef={apiRef} props={propsProcessed}>
      <GridRoot ref={apiRef.current.footerRef} />
    </GridContextProvider>
  );
}
