import { rand } from "./util"

export type Point2D = {
    x: number
    y: number
}

export type Vector2D = {
    x: number
    y: number
    mag: number
    theta: number
}

export const v_sub = (v: Vector2D | Point2D, u: Vector2D | Point2D) => ({ x: u.x - v.x, y: u.y - v.y })
export const v_angle = (v: Vector2D | Point2D) => Math.atan(v.y / v.x) + Math.PI * (v.x < 0 ? 1 : 0)
export const deg = (rad: number) => (180 / Math.PI) * rad
export const rad = (deg: number) => (Math.PI / 180) * deg

export const rand_vector = (max_mag: number, min_mag?: number): Vector2D => {
    const theta = rand(2*Math.PI, 0);
    const mag = rand(max_mag, min_mag)
    return {
        x: Math.cos(theta) * mag,
        y: Math.sin(theta) * mag,
        mag,
        theta
    }
}