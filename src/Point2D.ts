export default class Point2D {
    private x: number;
    private y: number

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y
    }

    public getX() {
        return this.x
    }

    public setX(x: number) {
        this.x = x
    }

    public getY() {
        return this.y
    }

    public setY(y: number) {
        this.y = y
    }
}