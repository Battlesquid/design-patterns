import Cell from "../entities/Cell";
import { dist, rand } from "../util/mathutil";
import World from "../World";
import Powerup from "./Powerup";

export default abstract class ConsumablePowerup extends Powerup {
    handleCollision(c: Cell) {
        if (this.collidesWith(c)) {
            this.applyPowerup(c)
            this.pos.setX(rand(World.WIDTH - this.width, this.width))
            this.pos.setY(rand(World.HEIGHT - this.height, this.height))
        }
    }

    collidesWith(c: Cell) {
        return dist(this.getX(), this.getY(), c.getX(), c.getY()) < c.getSize() + this.getRad()
    }

    abstract applyPowerup(c: Cell): void
}