import Entity from "../Entity";
import { rand } from "../util/mathutil";
import World from "../World";

export default class Region extends Entity {
    private rad: number
    private safe: boolean

    constructor() {
        super(Entity.randGridPos())
        this.rad = World.GRID_SIZE / 2 - 10
        this.width = this.rad
        this.height = this.rad
        this.safe = rand(2) === 0
    }

    public setLocation(x: number, y: number) {
        this.setX(x)
        this.setY(y)
    }

    public changeLocation() {
        const pos = Entity.randGridPos()
        this.setX(pos.getX());
        this.setY(pos.getY());
    }

    public getRad() {
        return this.rad
    }

    public isSafe() {
        return this.safe
    }

    public equals(other: Region) {
        return this.getX() === other.getX() &&
            this.getY() === other.getY()
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save()
        const color = this.safe ? "rgb(98, 255, 66)" : "rgb(255, 48, 84)"
        ctx.shadowColor = color
        ctx.shadowBlur = 10
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.rad, this.rad, 0, 0, 360)
        ctx.stroke()
        ctx.restore()
    }
}