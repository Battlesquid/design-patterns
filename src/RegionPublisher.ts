import Region from "./Region";
import { Observer } from "./types";

export default class RegionPublisher {
    private observers: Observer[] = [];
    private region: Region;

    constructor() {
        this.region = new Region();
    }

    public subscribe(o: Observer) {
        this.observers.push(o);
    }

    public getRegion() {
        return this.region;
    }
    public unsubscribe(o: Observer) {
        this.observers = this.observers.filter(ob => ob !== o)
    }

    public randomizeLoc() {
        this.region.randomizeLoc();
    }

    public notifyObservers() {
        console.log(`[RegionPublisher]: Notifying ${this.observers.length} observers.`)
        for (const o of this.observers) {
            o.update(this.region);
        }
    }
}