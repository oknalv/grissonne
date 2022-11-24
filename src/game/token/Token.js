export default class Token {
    static TIMEOUT = 500;
    static _key = 0;

    constructor(slotRef, rotation, player){
        this.display = true;
        this.slotRef = slotRef;
        this.player = player;
        this.rotation = rotation;
        this.key = Token._key++;
    }
}