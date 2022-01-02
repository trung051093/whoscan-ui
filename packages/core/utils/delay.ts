/**
 * Delay after milisecond.
 *
 * @export
 * @param {number} timeout
 * @returns {Promise<any>}
 */
export function delay(timeout: number): Promise<any> {
    return new Promise<any>((resolve) => {
        setTimeout(resolve, timeout);
    });
}

/**
 * Retry with number & interval
 *
 * @export
 * @template T
 * @param {number} number
 * @param {(number | number[])} interval
 * @param {(Promise<T> | (() => Promise<T>))} action
 * @returns {(Promise<T | undefined>)}
 */
export async function retry<T>(
    number: number,
    interval: number | number[],
    action: () => Promise<T>,
    again?: (error: Error) => boolean,
): Promise<T> {
    for (let tried = 0; tried < number; ++tried) {
        try {
            return await action();
        } catch (error: any) {
            if (!!again && !again(error)) {
                throw error;
            }
            if (tried === number - 1) {
                throw error;
            }
            if (interval instanceof Array) {
                if (tried < interval.length) {
                    await delay(interval[tried]);
                }
            } else {
                await delay(interval);
            }
        }
    }
    throw new RangeError('Invalied retry number.');
}
