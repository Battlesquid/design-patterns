import Entity from "../Entity";
import PowerupFactory from "./PowerupFactory";
import ResistancePowerup from "../powerups/ResistancePowerup";
import SpeedPowerup from "../powerups/SpeedPowerup";
import TeleportPowerup from "../powerups/TeleportPowerup";

export default class ConsumablePowerupFactory extends PowerupFactory {

    public createPowerup(power: number) {
        switch (power) {
            case 0:
                return new ResistancePowerup(Entity.randPos())
            case 1:
                return new SpeedPowerup(Entity.randPos())
            case 2:
            default:
                return new TeleportPowerup(Entity.randPos())
        }
    }
}