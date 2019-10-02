//% block="magnitude of 3d vector at x %x and y %y and z %z"
//% inlineInputMode=inline
export function mag3d(x: number, y: number, z: number): number {
    return Math.sqrt(x * x + y * y + z * z);
}
