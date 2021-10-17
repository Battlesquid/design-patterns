import Ball from "./Ball";
import World from "./World";

export default class BallType {
    // some large-sized variable
    private type: string;
    private color: string;

    constructor(type: string, color: string) {
        this.type = type;
        this.color = color;
    }

    public getType() {
        return this.type;
    }

    public getColor() {
        return this.color;
    }

    update(ctx: CanvasRenderingContext2D, ball: Ball, world: World) {
        ball.setX(ball.getX() + ball.getVx());
        ball.setY(ball.getY() + ball.getVy());

        if (ball.getX() > world.getWidth() || ball.getX() < 0)
            ball.invertVX();
        if (ball.getY() > world.getHeight() || ball.getY() < 0)
            ball.invertVY();

        this.draw(ctx, ball);
    }

    private draw(ctx: CanvasRenderingContext2D, ball: Ball) {
        // some very large bitmap could be present here
        ctx.fillStyle = ball.getBallType().getColor();
        ctx.beginPath();
        ctx.ellipse(
            ball.getX(), ball.getY(),
            ball.getSize(), ball.getSize(),
            0, 0, 360
        );
        ctx.fill();
    }
}