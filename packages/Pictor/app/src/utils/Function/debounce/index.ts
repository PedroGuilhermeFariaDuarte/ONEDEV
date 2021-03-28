let timeDebounce: number;

export function handlerDebouceFunction(fn: Function, time: number, ...params: any) {
    if (time < 0 || !Number(time)) return;

    clearTimeout(timeDebounce)

    timeDebounce = setTimeout(() => {
        fn(...params)
    }, time)
}
