import { GridRootComponent as GridRoot } from "./components/GridRoot";
import { GridContextProvider } from "./components/GridContextProvider";
import { useGridApiInitialization, usePreProcessingProps } from "./hooks";
import { DataGridProps } from "./models";
import "./css/grid.css";

export function DataGrid({ ...props }: DataGridProps) {
  const apiRef = useGridApiInitialization(undefined);
  const propsProcessed = usePreProcessingProps(props);

  return (
    <GridContextProvider apiRef={apiRef} props={propsProcessed}>
      <GridRoot></GridRoot>
    </GridContextProvider>
  );
}