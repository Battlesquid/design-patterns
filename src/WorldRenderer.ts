import Entity from "./Entity";

export default class WorldRenderer {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d")
    }

    public render(entities: Entity[]) {
        for (const entity of entities) {
            entity.draw(this.ctx)
        }
    }

    public getCtx() {
        return this.ctx
    }
}