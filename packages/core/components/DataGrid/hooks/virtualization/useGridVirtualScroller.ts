// Uses binary search to avoid looping through all possible positions
export function getIndexFromScroll(
    offset: number,
    positions: number[],
    sliceStart = 0,
    sliceEnd = positions.length,
): number {
    if (positions.length <= 0) {
        return -1;
    }

    if (sliceStart >= sliceEnd) {
        return sliceStart;
    }

    const pivot = sliceStart + Math.floor((sliceEnd - sliceStart) / 2);
    const itemOffset = positions[pivot];
    return offset <= itemOffset
        ? getIndexFromScroll(offset, positions, sliceStart, pivot)
        : getIndexFromScroll(offset, positions, pivot + 1, sliceEnd);
}