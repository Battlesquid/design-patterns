import Ball from "./Ball";
import BallType from "./BallType";
import { Point2D, Vector2D } from "./vectors";

export default class BallFactory {
    private ballTypes: BallType[] = [];

    public createBall(pos: Point2D, v: Vector2D, type: string, size: number, color: string, target: Point2D) {
        const ballType: BallType = this.getBallType(type, color, size);
        return new Ball(pos, v, size, ballType, target);
    }

    public getBallType(type: string, color: string, size: number): BallType {

        const ballType = this.ballTypes.find(bt => bt.equals(type, color, size));
        if(ballType) {
            console.log(`[BallFactory]: Ball of type "${type}" already exists.`)
            return ballType;
        }

        console.log(`[BallFactory]: Creating ball of type "${type}"`)
        const newBallType = new BallType(type, color, size);
        this.ballTypes.push(newBallType);

        return newBallType;
    }
}