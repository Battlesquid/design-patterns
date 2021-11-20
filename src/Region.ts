import { rand } from "./util";
import { Point2D } from "./vectors";
import World from "./World";

export default class Region {
    private pos: Point2D = {x: 0, y: 0}
    private rad: number = 0;
    private widthBound: number = 0;
    private heightBound: number = 0;

    constructor() {
        this.widthBound = World.WIDTH;
        this.heightBound = World.HEIGHT;
        this.pos.x = rand(this.widthBound);
        this.pos.y = rand(this.heightBound);
        console.log(this)
        this.rad = rand(100, 40);
    }

    public randomizeLoc() {
        this.pos.x = rand(this.widthBound);
        this.pos.y = rand(this.heightBound);
        this.rad--
        console.log(`[Region]: Location: (${this.pos.x}, ${this.pos.y}) with radius ${this.rad}`)
    }

    public getPos() {
        return this.pos;
    }

    public getX() {
        return this.pos.x;
    }

    public getY() {
        return this.pos.y;
    }

    public getRad() {
        return this.rad;
    }
}