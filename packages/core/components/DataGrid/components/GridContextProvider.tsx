import { GridApiContext } from "../contexts";
import { GridContext } from "../contexts/gridContext";
import { GridProcessedProps, GridApi } from "../models";

export interface GridContextProviderProps {
  apiRef: React.MutableRefObject<GridApi>;
  props: GridProcessedProps;
  children: any;
}

export const GridContextProvider = ({
  children,
  apiRef,
  props,
}: GridContextProviderProps) => {
  return (
    <GridApiContext.Provider value={apiRef}>
      <GridContext.Provider value={props}>{children}</GridContext.Provider>
    </GridApiContext.Provider>
  );
};
