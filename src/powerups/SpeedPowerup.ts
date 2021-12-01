import Cell from "../entities/Cell";
import ConsumablePowerup from "./ConsumablePowerup";

export default class SpeedPowerup extends ConsumablePowerup  {
    
    applyPowerup(c: Cell): void {
        c.setVx(c.getVx() * 1.01)
        c.setVy(c.getVy() * 1.01)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save()
        ctx.strokeStyle = "rgb(200, 245, 66)"
        ctx.shadowColor =  "rgb(200, 245, 66)"
        ctx.shadowBlur = 4
        ctx.beginPath()
        ctx.moveTo(this.getX(), this.getY() - this.height)
        ctx.lineTo(this.getX() + this.width, this.getY() + this.height)
        ctx.lineTo(this.getX() - this.width, this.getY() + this.height)
        ctx.lineTo(this.getX(), this.getY() - this.height)
        ctx.stroke()
        ctx.restore()
    }
}