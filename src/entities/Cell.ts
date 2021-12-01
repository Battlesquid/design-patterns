import CellType from "../CellType"
import Entity from "../Entity"
import Point2D from "../Point2D"
import Region from "./Region"
import RegionSubject, { RegionObserver } from "../RegionSubject"
import Vector2D from "../Vector2D"
import { dist } from "../util/mathutil"

export default class Cell extends Entity implements RegionObserver {
    private vel: Vector2D;
    private size: number;
    private cellType: CellType;
    private alive: boolean = true
    private dormant: boolean = false
    private resistance: number = 0
    private poweredUp: boolean = false

    constructor(pos: Point2D, v: Vector2D, size: number, cellType: CellType) {
        super(pos)
        this.vel = v;
        this.size = size;
        this.cellType = cellType;
    }

    public getVel() {
        return this.vel
    }

    public setVel(vel: Vector2D) {
        this.vel = vel
    }

    public getVx() {
        return this.vel.getVx();
    }

    public setVx(vx: number) {
        this.vel.setVx(vx)
    }

    public getVy() {
        return this.vel.getVy();
    }

    public setVy(vy: number) {
        this.vel.setVy(vy)
    }

    public setVelMag(mag: number) {
        this.vel.setMag(mag)
    }
    
    public invertVX() {
        this.vel.setVx(this.vel.getVx() * -1);
    }

    public invertVY() {
        this.vel.setVy(this.vel.getVy() * -1);
    }

    public getSize() {
        return this.size;
    }

    public getCellType() {
        return this.cellType;
    }

    public isAlive() {
        return this.alive
    }

    public isDormant() {
        return this.dormant
    }


    public getResistance() {
        return this.resistance
    }

    public hasResistance() {
        return this.resistance > 0
    }

    public setResistance(r: number) {
        this.resistance = r
    }

    public decreaseResistance() {
        this.resistance--
    }

    public increaseResistance() {
        this.resistance++
    }

    public isPoweredUp() {
        return this.poweredUp
    }

    public setPoweredUp(p: boolean) {
        this.poweredUp = p
    }

    public updateVelocity() {
        // const angle = Math.atan2(this.target.getY() - this.pos.getY(), this.target.getX() - this.pos.getX())
        // const mag = dist(this.target.getX(), this.target.getY(), this.pos.getX(), this.pos.getY()) < 100 ? 0 : 1
        const clamp = Math.abs(this.vel.getMag()) > this.vel.getMaxMag() ?
            this.vel.getMaxMag() / Math.abs(this.vel.getMag()) :
            1

        // this.vel.addVx(mag * Math.cos(angle))
        // this.vel.addVy(mag * Math.sin(angle))

        this.vel.setVx(this.vel.getVx() * clamp)
        this.vel.setVy(this.vel.getVy() * clamp)
    }

    public updatePosition() {
        this.setX(this.getX() + this.getVx());
        this.setY(this.getY() + this.getVy());
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.cellType.update(ctx, this);
    }

    update(rs: RegionSubject, regions: Region[]): void {
        const region = regions.find(r => dist(r.getX(), r.getY(), this.getX(), this.getY()) < r.getRad() + this.getSize())
        if (!region) return;

        if (region.isSafe() && this.dormant) {
            this.dormant = false
        } else if (!region.isSafe()) {
            if (this.hasResistance()) {
                this.decreaseResistance()
            } else {
                if (!this.dormant)
                    this.dormant = true
                else {
                    this.alive = false
                    rs.unsubscribe(this)
                }
            }
        }
    }
}