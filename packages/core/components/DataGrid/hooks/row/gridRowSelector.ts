import { GridState } from "../../models";
import { createSelector } from "../../utils/createSelector";

export const gridRowsStateSelector = (state: GridState) => state.rows;

export const gridRowsLookupSelector = createSelector(
    gridRowsStateSelector,
    (rows) => rows.idRowsLookup,
);

export const gridRowHeightSelector = createSelector(
    gridRowsStateSelector,
    (rows) => rows.rowHeight,
);

export const gridAllRowsSelector = createSelector(
    gridRowsStateSelector,
    (rows) => rows.all,
);
