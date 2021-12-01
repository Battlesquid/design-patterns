import Entity from "../Entity";
import AreaSpeedPowerup from "../powerups/AreaSpeedPowerup";
import PowerupFactory from "./PowerupFactory";

export default class AreaPowerupFactory extends PowerupFactory {
    public createPowerup(powerup: number) {
        switch (powerup) {
            case 0:
            default:
                return new AreaSpeedPowerup(100, Entity.randPos())
        }
    }
}