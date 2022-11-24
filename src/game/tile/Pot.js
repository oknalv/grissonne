export default class Pot {
    constructor(tile) {
        this.player = null;
        this.position = null;
        this.tile = tile;
        this.display = false;
    }

    putToken(player) {
        this.player = player;
        this.player.tokens--;
        this.display = true;
    }

    returnToken(){
        this.player.tokens++;
        this.player = null;
        this.display = false;
    }
}