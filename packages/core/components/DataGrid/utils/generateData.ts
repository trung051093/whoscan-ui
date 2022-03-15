export interface FakeDataGrid {
    rows: Record<string, any>[]
    columns: Record<string, any>[]
}

export function generateData(row: number = 1, col: number = 1): any {
    const rows: Record<string, any>[] = []
    const columns: Record<string, any>[] = []
    const columnKeys: string[] = []

    for (let j = 0; j < col; j++) {
        const key = 'col' + j
        columns.push({
            field: key,
            label: key
        })
        columnKeys.push(key)
    }

    for (let i = 0; i < row; i++) {
        const id = 'row' + i
        const obj = {
            id: id
        }
        for (let k = 0; k < columnKeys.length; k++) {
            Object.assign(obj, { [columnKeys[k]]: id + '-' + [columnKeys[k]] })
        }
        rows.push(obj)
    }

    return {
        rows,
        columns
    }
}