import { rand } from "./mathutil"
import Vector2D from "../Vector2D"

export const v_sub = (v: Vector2D, u: Vector2D) => ({ x: u.getVx() - v.getVx(), y: u.getVy() - v.getVy() })
export const v_angle = (v: Vector2D) => Math.atan(v.getVy() / v.getVx()) + Math.PI * (v.getVx() < 0 ? 1 : 0)
export const normalize = (v: Vector2D) => ({ x: v.getVx() / v.getMag(), y: v.getVy() / v.getMag() })

export const rand_vector = (max_mag: number, min_mag?: number): Vector2D => {
    const theta = Math.random() * (2 * Math.PI)
    const mag = rand(max_mag, min_mag)

    return new Vector2D(Math.cos(theta) * mag, Math.sin(theta) * mag, max_mag)
}