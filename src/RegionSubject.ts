import Region from "./entities/Region";
import World from "./World";

export interface RegionObserver {
    update(rs: RegionSubject, r: Region[]): void;
}

export default class RegionSubject {
    private observers: RegionObserver[] = []
    private regions: Region[] = [];

    constructor() {
        this.init()
    }

    private init() {
        for (let i = 0; i < World.WIDTH / World.GRID_SIZE / 2; i++) {
            let newRegion: Region = new Region()
            while (this.regions.find(r => r.equals(newRegion))) {
                newRegion = new Region()
            }
            this.regions.push(newRegion)
        }
    }

    public subscribe(o: RegionObserver) {
        this.observers.push(o)
    }

    public getRegions() {
        return this.regions
    }

    public resetLocations() {
        for(const region of this.regions) {
            region.setLocation(0, 0)
        }
    }

    public changeLocations() {
        for (const region of this.regions) {
            region.changeLocation()
            // while (this.regions.find(r => r.equals(region))) {
            //     region.changeLocation()
            // }
        }
    }

    public unsubscribe(o: RegionObserver) {
        this.observers = this.observers.filter(ob => ob !== o);
    }

    public notifyObservers() {
        if(this.observers.length === 0) {
            console.log("[RegionPublisher]: No observers to notify...")
            return
        }
        console.log(`[RegionPublisher]: Notifying ${this.observers.length} observers.`)
        for (const o of this.observers) {
            o.update(this, this.regions);
        }
        setTimeout(() => {
            this.resetLocations()
            this.changeLocations()
        }, 1000)
    }
}