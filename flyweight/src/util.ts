export const rand = (upper: number, lower?: number) => {
    if (lower !== undefined) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
    return Math.floor(Math.random() * upper);
}

export const randColor = (): string => {
    return `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`
}