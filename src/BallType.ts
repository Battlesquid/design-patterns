import Ball from "./Ball";
import World from "./World";

export default class BallType {
    private type: string;
    private color: string;
    private size: number;

    constructor(type: string, color: string, size: number) {
        this.type = type;
        this.color = color;
        this.size = size;
    }

    public getType() {
        return this.type;
    }

    public getColor() {
        return this.color;
    }

    public getSize() {
        return this.size
    }

    public equals(type: string, color: string, size: number): boolean {
        return this.color === color &&
            this.size === size &&
            this.type === type
    }

    update(ctx: CanvasRenderingContext2D, ball: Ball) {
        ball.setX(ball.getX() + ball.getVx());
        ball.setY(ball.getY() + ball.getVy());

        if (ball.getX() > World.WIDTH || ball.getX() < 0)
            ball.invertVX()
        if (ball.getY() > World.HEIGHT || ball.getY() < 0)
            ball.invertVY()

        if (!ball.getIsSafe()) {
            ball.recalculateAngle()
        }

        this.draw(ctx, ball);
    }

    private draw(ctx: CanvasRenderingContext2D, ball: Ball) {
        ctx.save()
        ctx.shadowColor = ball.getBallType().getColor();
        ctx.shadowBlur = 10
        ctx.strokeStyle = ball.getBallType().getColor();
        ctx.beginPath();
        ctx.ellipse(
            ball.getX(), ball.getY(),
            ball.getSize(), ball.getSize(),
            ball.getAngle(), 0, 360
        );
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(ball.getX(), ball.getY())
        const x = ball.getSize() * Math.cos(ball.getAngle())
        const y = ball.getSize() * Math.sin(ball.getAngle())
        ctx.lineTo(ball.getX() + x, ball.getY() + y)
        ctx.stroke()
        ctx.restore()
    }
}