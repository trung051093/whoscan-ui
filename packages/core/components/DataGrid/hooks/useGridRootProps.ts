import React from "react";
import { GridContext } from "../contexts/gridContext";
import { GridProcessedProps } from "../models";

export const useGridRootProps = () => {
    const contextValue = React.useContext(GridContext);
    return contextValue as GridProcessedProps;
}