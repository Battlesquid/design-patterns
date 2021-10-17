import Ball from "./Ball";
import BallType from "./BallType";

export default class BallFactory {
    private ballTypes: BallType[] = [];

    public createBall(initialX: number, initialY: number, initialVX: number, initialVY: number, type: string, size: number, color: string) {
        const ballType: BallType = this.getBallType(type, color);
        return new Ball(initialX, initialY, initialVX, initialVY, size, ballType);
    }

    public getBallType(type: string, color: string): BallType {
        for (let i = 0; i < this.ballTypes.length; i++) {   
            const ballType = this.ballTypes[i];
            if (ballType.getType() === type && ballType.getColor() === color)
                return this.ballTypes[i];
        }

        const newBallType = new BallType(type, color);
        this.ballTypes.push(newBallType);

        return newBallType;
    }
}