export default class Color {
    constructor(color) {
        this.h = color.h;
        this.s = color.s;
        this.l = color.l;
    }

    get() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }

    getLighter() {
        return `hsl(${this.h}, ${this.s}%, ${this.l + 30}%)`;
    }

    getLightest() {
        return `hsl(${this.h}, ${this.s}%, ${this.l + 50}%)`;
    }
}