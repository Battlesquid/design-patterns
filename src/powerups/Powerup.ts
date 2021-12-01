import Cell from "../entities/Cell";
import Entity from "../Entity";
import Point2D from "../Point2D";

export default abstract class Powerup extends Entity {
    protected rad: number

    constructor(pos: Point2D = new Point2D()) {
        super(pos)
        this.width = 10;
        this.height = 10
        this.rad = this.width
    }
    public getRad() {
        return this.rad
    }

    // will handle how collisions should behave
    abstract handleCollision(c: Cell): void

    // will determine if the powerup collides with the ball
    abstract collidesWith(c: Cell): boolean
    
    // will apply the powerup to the ball
    abstract applyPowerup(c: Cell): void;

    // default draw method
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save()
        ctx.strokeStyle = "rgb(255, 255, 255)"
        ctx.shadowBlur = 4
        ctx.shadowColor = "rgb(255, 255, 255)"
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.rad, this.rad, 0, 0, 360)
        ctx.stroke()
        ctx.restore()
    }
}