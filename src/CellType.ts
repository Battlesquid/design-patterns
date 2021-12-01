import Cell from "./entities/Cell";
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

    update(ctx: CanvasRenderingContext2D, ball: Cell) {

        if (ball.getX() > World.WIDTH - ball.getSize() || ball.getX() < ball.getSize())
            ball.invertVX()
        if (ball.getY() > World.HEIGHT - ball.getSize() || ball.getY() < ball.getSize())
            ball.invertVY()

        if (!ball.isDormant())
            ball.updatePosition()

        this.draw(ctx, ball);
    }

    private draw(ctx: CanvasRenderingContext2D, ball: Cell) {
        ctx.save()

        let color = ball.isDormant() ? "rgb(105, 0, 18)" : ball.getCellType().getColor()
        color = ball.isAlive() ? color : "rgb(44, 44, 44)"

        ctx.shadowColor = color
        ctx.shadowBlur = 10
        ctx.strokeStyle = color
        ctx.beginPath();
        ctx.ellipse(
            ball.getX(), ball.getY(),
            ball.getSize(), ball.getSize(),
            0, 0, 360
        );
        ctx.stroke()

        const angle = Math.atan2(ball.getVy(), ball.getVx())
        const x = ball.getSize() * Math.cos(angle)
        const y = ball.getSize() * Math.sin(angle)

        ctx.beginPath()
        ctx.moveTo(ball.getX(), ball.getY())
        ctx.lineTo(ball.getX() + x, ball.getY() + y)
        ctx.stroke()
        ctx.restore()
    }
}