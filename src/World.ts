import Cell from "./entities/Cell";
import Entity from "./Entity";
import CellFactory from "./factories/CellFactory";
import ConsumablePowerupFactory from "./factories/ConsumablePowerupFactory";
import AreaPowerupFactory from "./factories/AreaPowerupFactory";
import Powerup from "./powerups/Powerup";
import RegionSubject from "./RegionSubject";
import { rand } from "./util/mathutil";
import WorldRenderer from "./WorldRenderer";

export default class World {
    static readonly WIDTH: number = document.querySelector('.canvas')?.parentElement?.clientWidth ?? 800;
    static readonly HEIGHT: number = document.querySelector('.canvas')?.parentElement?.clientHeight ?? 600;
    static readonly GRID_SIZE: number = 100

    private ballFactory = new CellFactory();
    private cells: Cell[] = []
    private powerups: Powerup[] = []
    private entities: Entity[] = [];

    private renderer: WorldRenderer;
    private regionSubject: RegionSubject

    private ticks: number = 0;
    private tickLimit: number = 1000

    constructor(canvas: HTMLCanvasElement) {
        canvas.width = World.WIDTH
        canvas.height = World.HEIGHT
        this.renderer = new WorldRenderer(canvas)
        this.regionSubject = new RegionSubject()
        this.init()
    }

    private init() {
        for (const r of this.regionSubject.getRegions()) {
            this.entities.push(r)
        }

        for (let i = 0; i < 10; i++) {
            const b: Cell = this.ballFactory.createRandCell()
            this.regionSubject.subscribe(b)
            this.cells.push(b)
            this.entities.push(b)
        }

        const proxFactory = new AreaPowerupFactory()
        for (let i = 0; i < 2; i++) {
            const n = rand(1)
            const powerup = proxFactory.createPowerup(n)

            this.entities.push(powerup)
            this.powerups.push(powerup)
        }

        const consFactory = new ConsumablePowerupFactory()
        for (let i = 0; i < 5; i++) {
            const n = rand(4)
            const powerup = consFactory.createPowerup(n)

            this.entities.push(powerup)
            this.powerups.push(powerup)
        }

        requestAnimationFrame(this.update.bind(this))
    }

    // i know this is inefficient but it works for the amount of objects we have
    // should probably use something like sweep and prune for performance
    private checkCollisions() {
        for (const ball of this.cells) {
            for (const powerup of this.powerups) {
                powerup.handleCollision(ball)
            }
        }
    }

    private update() {
        requestAnimationFrame(this.update.bind(this))

        this.ticks++
        this.draw(this.renderer.getCtx())
        this.renderer.render(this.entities)

        if (this.ticks % this.tickLimit == 0) {
            console.log(`[World]: Tick Limit reached.`)
            this.regionSubject.notifyObservers()
        }

        this.checkCollisions()
    }

    private draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.fillStyle = "#111111"
        ctx.fillRect(0, 0, World.WIDTH, World.HEIGHT)
        ctx.strokeStyle = "#2b2b2b"
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