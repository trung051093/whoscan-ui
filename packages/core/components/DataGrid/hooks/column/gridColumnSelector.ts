import { GridState } from "../../models";
import { createSelector } from "../../utils/createSelector";

export const gridColumnsStateSelector = (state: GridState) => state.columns;

export const gridColumnsLookupSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.fieldColumnsLookup,
);

export const gridAllColumnsSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.all,
);

export const gridFieldColumnsLookupSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.fieldColumnsLookup,
);

export const gridIndexColumnsLookupSelector = createSelector(
    gridColumnsStateSelector,
    (columns) => columns.indexColumnsLookup,
);
