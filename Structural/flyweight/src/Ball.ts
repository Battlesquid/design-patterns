import BallType from "./BallType";
import World from "./World";

export default class Ball {
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private size: number;
    private ballType: BallType;

    constructor(initialX: number, initialY: number, initialVX: number, initialVY: number, size: number, ballType: BallType) {
        this.x = initialX;
        this.y = initialY;
        this.vx = initialVX;
        this.vy = initialVY;
        this.size = size;
        this.ballType = ballType;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public setX(x: number) {
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }

    public getVx() {
        return this.vx;
    }

    public getVy() {
        return this.vy;
    }

    public invertVX() {
        this.vx *= -1;
    }

    public invertVY() {
        this.vy *= -1;
    }

    public getSize() {
        return this.size;
    }

    public getBallType() {
        return this.ballType;
    }

    public update(ctx: CanvasRenderingContext2D, world: World) {
        this.ballType.update(ctx, this, world);
    }
}