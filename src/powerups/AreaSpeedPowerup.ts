import Cell from "../entities/Cell";
import Vector2D from "../Vector2D";
import AreaPowerup from "./AreaPowerup";

export default class AreaSpeedPowerup extends AreaPowerup<Vector2D> {

    applyPowerup(c: Cell): void {
        c.setVx(c.getVx() * 2)
        c.setVy(c.getVy() * 2)
    }

    public handleCollision(c: Cell) {
        // if the powerup collides with the ball
        if (this.collidesWith(c)) {
            // if the ball is cached, or in range of a powerup,
            // return so we don't stack on the effect
            if (this.getCache().has(c) || c.isPoweredUp()) return
            // add a copy of the ball's vector to the cache and apply the powerup
            c.setPoweredUp(true)
            this.getCache().set(c, c.getVel().clone())
            this.applyPowerup(c)
        } else {
            // if the ball is not colliding, check if it's cached
            const cachedVector = this.getCache().get(c)
            if(!cachedVector) return

            // reset the balls velocity and remove from cache
            console.log(cachedVector)
            c.setVelMag(cachedVector.getMag())
            c.setPoweredUp(false)
            this.getCache().delete(c)
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.strokeStyle = "rgb(77, 119, 128)"
        ctx.shadowBlur = 4
        ctx.shadowColor = "rgb(77, 119, 128)"
        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.width, this.height, 0, 0, 360)
        ctx.stroke()

        ctx.beginPath()
        ctx.ellipse(this.getX(), this.getY(), this.getProximity(), this.getProximity(), 0, 0, 360)
        ctx.stroke()

        ctx.moveTo(this.getX(), this.getY() + this.height / 2)
        ctx.lineTo(this.getX(), this.getY() - this.height / 2)
        ctx.moveTo(this.getX() - this.width / 2, this.getY())
        ctx.lineTo(this.getX() + this.width / 2, this.getY())
        ctx.restore()
    }
}