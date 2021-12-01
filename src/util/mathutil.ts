export const rand = (upper: number, lower?: number) => {
    if (lower !== undefined) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
    return Math.floor(Math.random() * upper);
}

export const PI_2 = Math.PI * 2;

export const deg = (rad: number) => (180 / Math.PI) * rad
export const rad = (deg: number) => (Math.PI / 180) * deg

export const dist = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2))