export default class Vector2D {
    private vx: number
    private vy: number
    private mag: number = 0
    private maxMag: number = -1

    constructor(x: number = 0, y: number = 0, maxMag?: number) {
        this.vx = x;
        this.vy = y
        if (maxMag)
            this.maxMag = maxMag
        this.updateMag()
    }

    public getVx() {
        return this.vx;
    }

    public setVx(vx: number) {
        this.vx = vx;
        this.updateMag()
    }

    public getVy() {
        return this.vy
    }

    public setVy(vy: number) {
        this.vy = vy;
        this.updateMag()
    }

    public getMag() {
        return this.mag
    }

    public setMag(mag: number) {
        const angle = Math.atan2(this.vy, this.vx)
        this.mag = mag
        this.vx = (mag  * Math.cos(angle))
        this.vy = (mag  * Math.sin(angle))
    }

    public addVx(vx: number) {
        this.vx += vx;
        this.updateMag()
    }

    public addVy(vy: number) {
        this.vy += vy
        this.updateMag()
    }


    public getMaxMag() {
        return this.maxMag
    }

    public setMaxMag(mag: number) {
        this.maxMag = mag
    }

    public clone() {
        return new Vector2D(this.vx, this.vy, this.maxMag)
    }
    
    private updateMag() {
        this.mag = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
    }
}