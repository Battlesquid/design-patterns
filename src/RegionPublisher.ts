import Region from "./Region";
import World from "./World";
import { Observer } from "./types";

export default class RegionPublisher {
    private observers: Observer[] = [];
    private region: Region;

    constructor(w: World) {
        this.region = new Region(w);
    }

    public subscribe(o: Observer) {
        this.observers.push(o);
    }

    public getRegion() {
        return this.region;
    }
    public unsubscribe(o: Observer) {
        this.observers = this.observers.filter(sb => sb !== o)
    }

    public randomizeLoc() {
        this.region.randomizeLoc();
    }

    public notifyObservers() {
        for (const o of this.observers) {
            o.update(this.region);
        }
    }
}