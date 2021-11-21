import Entity from "./Entity";
import { rand } from "./util";
import { Point2D } from "./vectors";

export default class Region implements Entity {
    private pos: Point2D = { x: 0, y: 0 }
    private rad: number;
    private widthBound: number;
    private heightBound: number;

    constructor(widthBound: number, heightBound: number) {
        this.widthBound = widthBound;
        this.heightBound = heightBound;
        this.pos.x = rand(this.widthBound);
        this.pos.y = rand(this.heightBound);
        this.rad = rand(100, 40);
    }

    public changeLocation() {
        this.pos.x = rand(this.widthBound);
        this.pos.y = rand(this.heightBound);
        this.rad--
        console.log(`[Region]: Location: (${this.pos.x}, ${this.pos.y}) with radius ${this.rad}`)
    }

    public getPos() {
        return this.pos;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        const color = "rgb(96, 245, 66)"
        ctx.shadowColor = color
        ctx.shadowBlur = 10
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.ellipse(this.pos.x, this.pos.y, this.rad, this.rad, 0, 0, 360)
        ctx.stroke()
        ctx.restore()
    }
}