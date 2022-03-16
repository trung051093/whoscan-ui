import { GridState } from "../../models";
import { createSelector } from "../../utils/createSelector";

export const gridColumnsStateSelector = (state: GridState) => state.columns;

export const gridColumnsLookupSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.fieldColumnsLookup,
);

export const gridTotalColumnWidthSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.totalColumnWidth,
);

export const gridAllColumnsSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.all,
);
