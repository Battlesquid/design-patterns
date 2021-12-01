import Cell from "../entities/Cell";
import { rand } from "../util/mathutil";
import World from "../World";
import ConsumablePowerup from "./ConsumablePowerup";

export default class TeleportPowerup extends ConsumablePowerup {
    applyPowerup(c: Cell): void {
        c.setX(rand(World.WIDTH - c.getSize(), c.getSize()))
        c.setY(rand(World.HEIGHT - c.getSize(), c.getSize()))
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.strokeStyle = "rgb(204, 164, 245)"
        ctx.shadowBlur = 4
        ctx.shadowColor = "rgb(204, 164, 245)"
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.getRad(), this.getRad(), 0, 0, 360)
        ctx.stroke()
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.getRad() - this.getRad() / 2, this.getRad() - this.getRad() / 2, 0, 0, 360)
        ctx.stroke()
        ctx.restore()
    }
}