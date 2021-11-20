import Ball from "./Ball";
import BallFactory from "./BallFactory";
import RegionPublisher from "./RegionPublisher";
import WorldRenderer from "./WorldRenderer";
import { rand, randColor } from "./util"
import { Point2D, rand_vector, Vector2D } from "./vectors";
import Region from "./Region";

export default class World {
    static readonly WIDTH: number = 800;
    static readonly HEIGHT: number = 600;

    private ballFactory = new BallFactory();
    private balls: Ball[] = [];

    private renderer: WorldRenderer;
    private rp: RegionPublisher;

    private ticks: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        canvas.width = World.WIDTH;
        canvas.height = World.HEIGHT

        this.renderer = new WorldRenderer(canvas)
        this.rp = new RegionPublisher()

        const balls = [{
            type: "slow",
            weight: 0.5,
            size: 60,
            color: 'rgb(252, 186, 3)'
        }, {
            type: "normal",
            weight: 0.3,
            size: 30,
            color: 'rgb(39, 100, 214)'
        }, {
            type: "fast",
            weight: 0.2,
            size: 15,
            color: "rgb(173, 40, 173)"
        }]

        for (let i = 0; i < 50; i++) {
            const pos: Point2D = {
                x: rand(World.WIDTH),
                y: rand(World.HEIGHT)
            }
            const index = rand(3)

            const v: Vector2D = rand_vector(60 / balls[index].size, 1)

            const b: Ball = this.ballFactory.createBall(
                pos, v,
                balls[index].type, balls[index].size / 5,
                balls[index].color,
                this.rp.getRegion().getPos()
            )

            this.rp.subscribe(b)
            this.balls.push(b);
        }

        requestAnimationFrame(this.draw.bind(this))
    }

    private draw() {
        requestAnimationFrame(this.draw.bind(this))

        this.ticks++

        this.renderer.clearCanvas()

        const r: Region = this.rp.getRegion();
        this.renderer.getCtx().fillStyle = "#00FF00";
        this.renderer.getCtx().beginPath()
        this.renderer.getCtx().ellipse(r.getX(), r.getY(), r.getRad(), r.getRad(), 0, 0, 360)
        this.renderer.getCtx().fill()

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].redraw(this.renderer.getCtx())
        }

        if (this.ticks % 500 == 0) {
            this.rp.randomizeLoc()
            this.rp.notifyObservers()
        }
    }
}