import { GridColumn } from "../../models";

export function convertColumnssPropsToState(columns: GridColumn[] = []): {
    all: GridColumn[];
    fieldColumnsLookup: Map<string, GridColumn>;
    fields: string[]
} {
    const fieldColumnsLookup = new Map<string, GridColumn>();
    const fields: string[] = [];
    for (let i = 0; i < columns.length; i++) {
        const field = columns[i].field;
        fieldColumnsLookup.set(field, columns[i]);
        fields.push(field);
    }
    return {
        all: columns,
        fieldColumnsLookup,
        fields
    };
}