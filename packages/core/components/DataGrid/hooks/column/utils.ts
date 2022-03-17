import { GridColumn } from "../../models";

export function convertColumnssPropsToState(columns: GridColumn[] = []): {
    all: GridColumn[];
    fieldColumnsLookup: Map<string, GridColumn>;
    indexColumnsLookup: Map<number, GridColumn>;
    fields: string[];
    totalColumnWidth: number;
} {
    const fieldColumnsLookup = new Map<string, GridColumn>();
    const indexColumnsLookup = new Map<number, GridColumn>();
    const fields: string[] = [];
    let totalColumnWidth = 0
    for (let i = 0; i < columns.length; i++) {
        const field = columns[i].field;
        const minWidth = columns[i].minWidth || 100;
        fieldColumnsLookup.set(field, columns[i]);
        indexColumnsLookup.set(i, columns[i]);
        fields.push(field);
        totalColumnWidth += minWidth;
    }
    return {
        all: columns,
        fieldColumnsLookup,
        indexColumnsLookup,
        fields,
        totalColumnWidth
    };
}