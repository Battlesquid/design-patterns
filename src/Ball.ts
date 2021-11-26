import BallType from "./BallType";
import Entity from "./Entity";
import Region from "./Region";
import { Observer } from "./types";
import { Point2D, Vector2D, v_angle, v_sub } from "./vectors";

export default class Ball extends Entity implements Observer {

    private pos: Point2D;
    private vel: Vector2D;
    private size: number;
    private ballType: BallType;
    private isSafe: boolean = true;
    private target: Point2D;

    constructor(pos: Point2D, v: Vector2D, size: number, ballType: BallType, target: Point2D) {
        super()
        this.pos = pos; 
        this.vel = v;
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
        return this.vel.x;
    }

    public getVy() {
        return this.vel.y;
    }

    public setVX(vx: number) {
        this.vel.x = vx;
    }

    public setVY(vy: number) {
        this.vel.y = vy;
    }

    public invertVX() {
        this.vel.x *= -1;
    }

    public invertVY() {
        this.vel.y *= -1;
    }

    public getSize() {
        return this.size;
    }

    public getAngle() {
        return this.vel.theta;
    }

    public setAngle(angle: number) {
        this.vel.theta = angle;
    }

    public getBallType() {
        return this.ballType;
    }

    public getIsSafe() {
        return this.isSafe
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.ballType.update(ctx, this);
    }

    public updateVelocity() {
        this.setVX(Math.cos(this.getAngle()) * this.vel.mag)
        this.setVY(Math.sin(this.getAngle()) * this.vel.mag)
    }

    public recalculateAngle() {
        if (this.isSafe) return;

        const angle = v_angle(v_sub(this.pos, this.target))
        const dir = Math.sign(angle - this.getAngle())
        this.setAngle(this.getAngle() + dir * 0.2);
        this.updateVelocity()

        if (this.getAngle().toPrecision(1) === angle.toPrecision(1)) this.isSafe = true

    }

    public update(region: Region) {
        this.target = region.getPos()
        this.isSafe = false
    }
}