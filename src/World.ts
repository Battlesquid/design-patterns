import Ball from "./Ball";
import BallFactory from "./BallFactory";
import RegionPublisher from "./RegionPublisher";
import WorldRenderer from "./WorldRenderer";
import { rand } from "./util"
import { Point2D, rand_vector, Vector2D } from "./vectors";
import Entity from "./Entity";

export default class World implements Entity {
    static readonly WIDTH: number = 800;
    static readonly HEIGHT: number = 600;
    static readonly GRID_SIZE: number = 100

    private ballFactory = new BallFactory();
    private entities: Entity[] = [];

    private renderer: WorldRenderer;
    private rp: RegionPublisher;

    private ticks: number = 0;
    private tickLimit: number = 1000

    constructor(canvas: HTMLCanvasElement) {
        canvas.width = World.WIDTH;
        canvas.height = World.HEIGHT

        this.renderer = new WorldRenderer(canvas)
        this.rp = new RegionPublisher()
        this.entities.push(this)
        this.entities.push(this.rp.getRegion())
        const balls = [{
            type: "slow",
            size: 60,
            color: 'rgb(252, 186, 3)'
        }, {
            type: "normal",
            size: 30,
            color: 'rgb(39, 100, 214)'
        }, {
            type: "fast",
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

            this.entities.push(b)
        }

        requestAnimationFrame(this.update.bind(this))
    }

    private update() {
        requestAnimationFrame(this.update.bind(this))

        this.ticks++

        this.renderer.clearCanvas()

        for (const entity of this.entities) {
            entity.draw(this.renderer.getCtx())
        }

        if (this.ticks % this.tickLimit == 0) {
            console.log(`[World]: Tick Limit reached.`)
            this.rp.changeLocation()
            this.rp.notifyObservers()
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.fillStyle = "#111111"
        ctx.fillRect(0, 0, World.WIDTH, World.HEIGHT)
        ctx.strokeStyle = "#404040"
        ctx.lineWidth = 0.1
        for (let i = 0; i < World.WIDTH / World.GRID_SIZE; i++) {
            ctx.moveTo(0, i * World.GRID_SIZE)
            ctx.lineTo(World.WIDTH, i * World.GRID_SIZE)
            ctx.stroke()
            ctx.moveTo(i * World.GRID_SIZE, 0)
            ctx.lineTo(i * World.GRID_SIZE, World.HEIGHT)
            ctx.stroke()
        }
        ctx.restore()
    }
}