export default class Square {
    static _key = 0;
    static STATES = Object.freeze({
        empty: "empty",
        possible: "possible",
        set: "set"
    });

    constructor(state){
        this.state = state;
        this.key = Square._key++;
        this.tile = null;
    }

    setTile(tile){
        this.tile = tile;
        this.state = Square.STATES.set;
    }

}