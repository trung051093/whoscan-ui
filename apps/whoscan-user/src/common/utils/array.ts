export class ArrayServices {
    static append<T>(array: Array<T>, obj: T) {
        return [...array, obj];
    }
    static updateWithIndex<T>(array: Array<T>, index: number, obj: T) {
        const tempArr = [...array];
        tempArr[index] = obj;
        return tempArr;
    }
    static removeWithIndex<T>(array: Array<T>, index: number) {
        const tempArr = [...array];
        return tempArr.filter((_: T, indexItem: number) => indexItem !== index);
    }
    static updateWithId<T extends { id: string }>(array: Array<T>, id: string, obj: T) {
        const tempArr = [...array];
        const indexObj = array.findIndex((item: T) => item.id === id);
        tempArr[indexObj] = obj;
        return tempArr;
    }
    static removeWithId<T extends { id: string }>(array: Array<T>, id: string) {
        const tempArr = [...array];
        return tempArr.filter((item: T) => item.id !== id);
    }
    static updateWithField<T>(array: Array<T>, field: string, key: string | number, obj: T) {
        const tempArr = [...array];
        // @ts-ignore
        const indexObj = array.findIndex((item: T) => item[field] === key);
        tempArr[indexObj] = obj;
        return tempArr;
    }
    static removeWithField<T>(array: Array<T>, field: string, key: string | number) {
        const tempArr = [...array];
        // @ts-ignore
        return tempArr.filter((item: T) => item[field] !== key);
    }
    static reorder<T>(list: T[], startIndex: number, endIndex: number) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
}