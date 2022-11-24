export default class SquareRow {
    static _key = 0;

    constructor(squares) {
        this.row = squares;
        this.key = SquareRow._key++;
    }

}