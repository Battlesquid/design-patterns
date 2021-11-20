import Ball from "./Ball";
import BallType from "./BallType";
import { Point2D, Vector2D } from "./vectors";

export default class BallFactory {
    private ballTypes: BallType[] = [];

    public createBall(pos: Point2D, v: Vector2D, type: string, size: number, color: string, target: Point2D) {
        const ballType: BallType = this.getBallType(type, color);
        return new Ball(pos, v, size, ballType, target);
    }

    public getBallType(type: string, color: string): BallType {
        for (let i = 0; i < this.ballTypes.length; i++) {   
            const ballType = this.ballTypes[i];
            if (ballType.getType() === type && ballType.getColor() === color) {
                console.log(`[BallFactory]: Ball of type "${type}" already exists.`)
                return this.ballTypes[i];
            }
        }

        console.log(`[BallFactory]: Creating ball of type "${type}"`)
        const newBallType = new BallType(type, color);
        this.ballTypes.push(newBallType);

        return newBallType;
    }
}