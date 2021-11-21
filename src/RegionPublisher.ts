import Region from "./Region";
import { Observer } from "./types";
import World from "./World";

export default class RegionPublisher {
    private observers: Observer[] = [];
    private region: Region;

    constructor() {
        this.region = new Region(World.WIDTH, World.HEIGHT);
    }

    public subscribe(o: Observer) {
        this.observers.push(o);
    }

    public unsubscribe(o: Observer) {
        this.observers = this.observers.filter(ob => ob !== o)
    }
    
    public getRegion() {
        return this.region;
    }
    
    public changeLocation() {
        this.region.changeLocation();
    }

    public notifyObservers() {
        console.log(`[RegionPublisher]: Notifying ${this.observers.length} observers.`)
        for (const o of this.observers) {
            o.update(this.region);
        }
    }
}