import Color from "./Color";

export default class Player {
    constructor(player) {
        this.id = player.id;
        this.color = new Color(player.color);
        this.tokens = 7;
        this.points = 0;
    }
}