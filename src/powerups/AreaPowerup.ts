import Cell from "../entities/Cell";
import Point2D from "../Point2D";
import { dist } from "../util/mathutil";
import Powerup from "./Powerup";

// i ended up making this generic to allow the powerup to cache
// any type of data that it needed to cache
export default abstract class AreaPowerup<T> extends Powerup {
    private proximity: number
    private cache: Map<Cell, T> = new Map()

    constructor(prox: number, pos: Point2D = new Point2D()) {
        super(pos)
        this.proximity = prox
    }

    public getProximity() {
        return this.proximity
    }

    public getCache() {
        return this.cache
    }

    collidesWith(b: Cell): boolean {
        return dist(this.getX(), this.getY(), b.getX(), b.getY()) < b.getSize() + this.proximity
    }

    abstract handleCollision(b: Cell): void

    abstract applyPowerup(b: Cell): void
}