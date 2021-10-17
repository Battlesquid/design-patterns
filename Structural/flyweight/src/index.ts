import World from "./World";

const ballTypes = ["soccer", "tennis", "golf", "volleyball"]
const canvas = <HTMLCanvasElement> document.querySelector(".canvas");

new World(canvas, ballTypes);