import Cell from "../entities/Cell";
import ConsumablePowerup from "./ConsumablePowerup";

export default class ResistancePowerup extends ConsumablePowerup {
    applyPowerup(c: Cell): void {
        if (c.getResistance() <= 3)
            c.increaseResistance();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.strokeStyle = "rgb(77, 119, 128)"
        ctx.shadowBlur = 4
        ctx.shadowColor = "rgb(77, 119, 128)"
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.width, this.height, 0, 0, 360)
        ctx.moveTo(this.getX(), this.getY() + this.height / 2)
        ctx.lineTo(this.getX(), this.getY() - this.height / 2)
        ctx.moveTo(this.getX() - this.width / 2, this.getY())
        ctx.lineTo(this.getX() + this.width / 2, this.getY())
        ctx.stroke()
        ctx.restore()
    }
}