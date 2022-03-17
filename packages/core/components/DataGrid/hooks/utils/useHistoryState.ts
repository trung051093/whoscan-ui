import React from 'react'

export interface HistoryState<T> {
    history: T[]
    pointer: number
    reset: () => void
    back: () => void
    forward: () => void
    go: (index: number) => void
}

export function useHistoryState<T>(defaultValue: T, { capacity = 10 }): [T, (newState: T) => void, HistoryState<T>] {
    const [value, setValue] = React.useState<T>(defaultValue);
    const historyRef = React.useRef<T[]>([value])
    const pointerRef = React.useRef<number>(0);

    const set = React.useCallback((v) => {
        if (historyRef.current[pointerRef.current] !== v) {
            if (pointerRef.current < historyRef.current.length - 1) {
                historyRef.current.splice(pointerRef.current + 1)
            }
            historyRef.current.push(v)
            while (historyRef.current.length > capacity) {
                historyRef.current.shift()
            }
            pointerRef.current = historyRef.current.length - 1
        }
        setValue(v)
    }, [capacity, value])

    const back = React.useCallback(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const forward = React.useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const go = React.useCallback((index: number) => {
        if (index < 0 || index > historyRef.current.length - 1) return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const reset = React.useCallback(() => {
        historyRef.current = [historyRef.current[pointerRef.current]];
        setValue(historyRef.current[pointerRef.current])
        pointerRef.current = 0
    }, [])

    return [value, set, {
        history: historyRef.current,
        pointer: pointerRef.current,
        reset,
        go,
        forward,
        back
    }]
}