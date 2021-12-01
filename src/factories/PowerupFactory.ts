import Powerup from "../powerups/Powerup";

export default abstract class PowerupFactory {
    // given a number, generate a powerup
    abstract createPowerup(power: number): Powerup
}