import Ball from "./Ball";
import BallFactory from "./BallFactory";
import { rand, randColor } from "./util"

export default class World {
    private width: number;
    private height: number;

    private ballFactory = new BallFactory();
    private balls: Ball[] = [];

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, ballTypes: string[]) {
        this.canvas = canvas;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

        this.width = canvas.width;
        this.height = canvas.height;

        for (let i = 0; i < 100; i++) {
            this.balls.push(
                this.ballFactory.createBall(
                    rand(this.width), rand(this.height),
                    rand(-5, 5), rand(-5, 5), 
                    ballTypes[rand(ballTypes.length)], rand(5, 15),
                    randColor()
                )
            );
        }

        requestAnimationFrame(this.update.bind(this))
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.height;
    }

    private update() {
        requestAnimationFrame(this.update.bind(this));

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].update(this.ctx, this);
        }
    }
}