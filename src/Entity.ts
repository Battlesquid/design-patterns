import Point2D from "./Point2D";
import { rand } from "./util/mathutil";
import World from "./World";

export default abstract class Entity {
    protected pos: Point2D
    protected width: number = 10
    protected height: number = 10

    constructor(pos: Point2D = new Point2D()) {
        this.pos = pos
    }

    public getPos() {
        return this.pos
    }

    public getX() {
        return this.pos.getX()
    }

    public setX(x: number) {
        this.pos.setX(x)
    }

    public getY() {
        return this.pos.getY()
    }

    public setY(y: number) {
        this.pos.setY(y)
    }

    abstract draw(ctx: CanvasRenderingContext2D): void;

    static randPos() {
        return new Point2D(
            rand(World.WIDTH),
            rand(World.HEIGHT)
        )
    }

    static randGridPos() {
        return new Point2D(
            World.GRID_SIZE * rand(World.WIDTH / World.GRID_SIZE) + World.GRID_SIZE / 2,
            World.GRID_SIZE * rand(World.HEIGHT / World.GRID_SIZE) + World.GRID_SIZE / 2
        )
    }
}