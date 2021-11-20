import BallType from "./BallType";
import Region from "./Region";
import { Observer } from "./types";
import { Point2D, Vector2D, v_angle, v_sub } from "./vectors";
import World from "./World";

export default class Ball implements Observer {

    private pos: Point2D;
    private v: Vector2D;
    private size: number;
    private ballType: BallType;
    private isSafe: boolean = true;
    private target: Point2D;

    constructor(pos: Point2D, v: Vector2D, size: number, ballType: BallType, target: Point2D) {
        this.pos = pos;
        this.v = v;
        this.size = size;
        this.ballType = ballType;
        this.target = target
    }

    public getX() {
        return this.pos.x;
    }

    public getY() {
        return this.pos.y;
    }

    public setX(x: number) {
        this.pos.x = x;
    }

    public setY(y: number) {
        this.pos.y = y;
    }

    public getVx() {
        return this.v.x;
    }

    public getVy() {
        return this.v.y;
    }

    public setVX(vx: number) {
        this.v.x = vx;
    }

    public setVY(vy: number) {
        this.v.y = vy;
    }

    public invertVX() {
        this.v.x *= -1;
    }

    public invertVY() {
        this.v.y *= -1;
    }

    public getSize() {
        return this.size;
    }

    public getAngle() {
        return this.v.theta;
    }

    public setAngle(angle: number) {
        this.v.theta = angle;
    }

    public getBallType() {
        return this.ballType;
    }

    public getIsSafe() {
        return this.isSafe
    }

    public redraw(ctx: CanvasRenderingContext2D, world: World) {
        this.ballType.update(ctx, this, world);
    }

    public updateVelocity() {
        this.setVX(Math.cos(this.getAngle()) * this.v.mag)
        this.setVY(Math.sin(this.getAngle()) * this.v.mag)
    }

    public recalculateAngle() {
        if (this.isSafe) return;

        const angle = v_angle(v_sub(this.pos, this.target))
        const dir = Math.sign(angle - this.getAngle())
        this.setAngle(this.getAngle() + dir * 0.2);
        this.updateVelocity()

        if (this.getAngle().toPrecision(2) === angle.toPrecision(2)) this.isSafe = true

    }

    public update(region: Region) {
        this.target = region.getPos()
        this.isSafe = false
    }
}