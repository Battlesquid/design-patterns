import Cell from "../entities/Cell";
import CellType from "../CellType";
import Point2D from "../Point2D";
import { rand } from "../util/mathutil";
import { rand_vector } from "../util/vectors";
import Vector2D from "../Vector2D";
import World from "../World";

export default class CellFactory {
    private cellTypes: CellType[] = [];
    private cells = [{
        type: "slow",
        size: 40,
        color: 'rgb(252, 186, 3)'
    }, {
        type: "normal",
        size: 15,
        color: 'rgb(39, 100, 214)'
    }, {
        type: "fast",
        size: 5,
        color: 'rgb(173, 40, 173)'
    }]

    public createRandCell() {
        const cellType = this.cells[rand(3)]

        const pos: Point2D = new Point2D(
            rand(World.WIDTH - cellType.size, cellType.size),
            rand(World.HEIGHT - cellType.size, cellType.size)
        )

        const v: Vector2D = rand_vector(40 / cellType.size, 1)
        return this.createCell(pos, v,
            cellType.type, cellType.size / 5,
            cellType.color)
    }

    private createCell(pos: Point2D, v: Vector2D, type: string, size: number, color: string) {
        const cellType: CellType = this.getCellType(type, color, size);
        return new Cell(pos, v, size, cellType);
    }

    private getCellType(type: string, color: string, size: number): CellType {
        // try to find if an existing cell type exists
        const cellType = this.cellTypes.find(ct => ct.equals(type, color, size));
        if (cellType) {
            // if it does, return that one
            console.log(`[CellFactory]: Cell of type "${type}" already exists.`)
            return cellType;
        }
        // if it doesn't, make a new cell type
        console.log(`[CellFactory]: Creating cell of type "${type}"`)

        const newCellType = new CellType(type, color, size);
        this.cellTypes.push(newCellType);
        
        return newCellType;
    }
}