import { Component, createRef } from 'react';
import { withTranslation } from 'react-i18next';
import SegmentContainer from '../beans/SegmentContainer';
import { wait } from '../utils/utils';
import Board from './board/Board';
import Square from './board/square/Square';
import SquareRow from './board/square/SquareRow';
import './Game.scss';
import Message from './message/Message';
import MessageComponent from './message/MessageComponent';
import TextMessageComponent from './message/TextMessageComponent';
import TurnMessageComponent from './message/TurnMessageComponent';
import WinnerMessageComponent from './message/WinnerMessageComponent';
import SideMenu from './side-menu/SideMenu';
import Stats from './stats/Stats';
import Token from './token/Token';

class Game extends Component {

    pointsTimeout = 500;
    maxZoom = 4;
    tileMinWidth = 15;

    constructor(props) {
        super(props);
        this.boardRef = createRef();

        this.isMouseDown = false;
        this.isMoving = false;
        this.playerIndex = 0;

        const tiles = [...props.tiles];
        this.state = {
            newTile: tiles.pop(),
            highlightedSquare: null,
            squares: [ new SquareRow([ new Square(Square.STATES.possible) ]) ],
            blockBoard: false,
            paths: [],
            cities: [],
            fields: [],
            pots: [],
            currentPlayer: null,
            tiles,
            discard: [],
            message: null,
            onlySquare: [0, 0],
            prevRiverTileIndex: null,

            zoom: 3
        }

        this.stats = new Stats(this.props.players);
    }

    asyncSetState = async (newState) => {
        return new Promise((resolve) => this.setState(newState, resolve));
    }

    mouseUp = (ev) => {
        if(this.isMoving){
            ev.stopPropagation();
        }
        this.isMoving = false;
        this.isMouseDown = false;
    }

    blockBoard = async (blockBoard) => {
        await this.asyncSetState({ blockBoard })
    }

    markPossibles = (squares, newTile, onlySquare) => {
        let canPlace = false;
        squares.map((squareRow, i) => {
            squareRow.row.map((square, j) => {
                if(square.state === Square.STATES.possible){
                    let rightPlace = true;
                    if(onlySquare){
                        if(onlySquare[0] !== i || onlySquare[1] !== j){
                            rightPlace = false;
                        }
                        //river part to check that it doesn't turn twice to the same direction
                        else if(this.state.prevRiverTileIndex) {
                            //check if the new tile is turning
                            let newIsTurning = false;
                            for(let ii = 0; ii < 4; ii++){
                                if(newTile.sides[ii] === 3 && newTile.sides[(ii + 1) % 4] === 3){
                                    newIsTurning = true;
                                    break;
                                }
                            }
                            if(newIsTurning){
                                //check what side of the prev tile is going to be joint to the new one
                                let prevOpenSide = null;
                                if(j < this.state.prevRiverTileIndex[1]){
                                    prevOpenSide = 0;
                                }
                                else if(i < this.state.prevRiverTileIndex[0]){
                                    prevOpenSide = 1;
                                }
                                else if(j > this.state.prevRiverTileIndex[1]){
                                    prevOpenSide = 2;
                                }
                                else if(i > this.state.prevRiverTileIndex[0]){
                                    prevOpenSide = 3;
                                }
                                //check what direction is turning the prev tile (null = not turning, true = to the right, false = to the left)
                                let prevToTheRight = null;
                                let prevRiverTile = squares[this.state.prevRiverTileIndex[0]].row[this.state.prevRiverTileIndex[1]].tile;
                                if(prevRiverTile.sides[(prevOpenSide + 1) % 4] === 3){
                                    prevToTheRight = true;
                                }
                                else if(prevRiverTile.sides[(prevOpenSide + 3) % 4] === 3){
                                    prevToTheRight = false;
                                }
                                //if it is turning, check if both are turning to the same direction
                                if(prevToTheRight !== null){
                                    let newJoinSide = (prevOpenSide + 2) % 4;
                                    if(newTile.sides[newJoinSide] !== 3){
                                        rightPlace = false;
                                    }
                                    else {
                                        if(newTile.sides[(newJoinSide + 3) % 4] === 3) {
                                            rightPlace = !prevToTheRight;
                                        }
                                        else if(newTile.sides[(newJoinSide + 1) % 4] === 3){
                                            rightPlace = prevToTheRight;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if(squares[i].row[j - 1] && squares[i].row[j - 1].state === Square.STATES.set && squares[i].row[j - 1].tile.sides[2] !== newTile.sides[0]){
                        rightPlace = false; 
                    }
                    else if(squares[i].row[j + 1] && squares[i].row[j + 1].state === Square.STATES.set && squares[i].row[j + 1].tile.sides[0] !== newTile.sides[2]){
                        rightPlace = false;
                    }
                    else if(squares[i - 1] && squares[i - 1].row[j].state === Square.STATES.set && squares[i - 1].row[j].tile.sides[3] !== newTile.sides[1]){
                        rightPlace = false; 
                    }
                    else if(squares[i + 1] && squares[i + 1].row[j].state === Square.STATES.set && squares[i + 1].row[j].tile.sides[1] !== newTile.sides[3]){
                        rightPlace = false; 
                    }
                    square.rightPlace = rightPlace;
                    if(rightPlace){
                        canPlace = true;
                    }
                }
                return null;
            });
            return null;
        });
        return canPlace;
    }

    unclock = async () => {
        this.state.newTile.rotate();
        this.markPossibles(this.state.squares, this.state.newTile, this.state.onlySquare);
        await this.asyncSetState({});
    }

    clock = async () => {
        this.state.newTile.rotate(true);
        this.markPossibles(this.state.squares, this.state.newTile, this.state.onlySquare);
        await this.asyncSetState({});
    }

    zoomIn = () => {
        this.setState({ zoom: Math.min(this.state.zoom + 1, this.maxZoom) });
    }


    zoomOut = () => {
        this.setState({ zoom: Math.max(this.state.zoom - 1, 1) });
    }

    manageBoardElement = async (i, j, segmentContainerList, segmentListName) => {
        const newSquare = this.state.squares[i].row[j];
        if(newSquare.tile[segmentListName] && newSquare.tile[segmentListName].length > 0){
            for(const segment of newSquare.tile[segmentListName]){
                for(const point of segment.points){
                    let compareSquare = null;
                    switch(Math.floor(point / 3)) {
                        case 0:
                            if(this.state.squares[i]){
                                compareSquare = this.state.squares[i].row[j - 1];
                            }
                            break;
                        case 1:
                            if(this.state.squares[i - 1]){
                                compareSquare = this.state.squares[i - 1].row[j];
                            }
                            break;
                        case 2:
                            if(this.state.squares[i]){
                                compareSquare = this.state.squares[i].row[j + 1];
                            }
                            break;
                        case 3:
                            if(this.state.squares[i + 1]){
                                compareSquare = this.state.squares[i + 1].row[j];
                            }
                            break;
                        default:
                            break;
                    }
                    if(compareSquare && compareSquare.state === Square.STATES.set){
                        let sign = Math.sign(point - 5.5) * -1;
                        let pointToSearch = point + sign * (4 + 2 * (sign * -1 * (point % 3) + (sign > 0 ? 2 : 0)));
                        let segmentToJoin = compareSquare.tile[segmentListName].find((seg) => {
                            return seg.points.includes(pointToSearch);
                        });
                        segment.join(segmentToJoin, segmentContainerList);
                    }
                    else {
                        if(!segment.container){
                            let newSegmentContainer = new SegmentContainer(segment);
                            segmentContainerList.push(newSegmentContainer);
                        }
                    }
                }
            }
        }
        for(const segmentContainer of segmentContainerList){
            if(!segmentContainer.closed){
                segmentContainer.closed = true;
                for(const segment of segmentContainer.segments){
                    if(segment.points.length > (segment.closedPoints || 0) && !(segment.points.length === 1 && segment.points[0] === -1)){
                        segmentContainer.closed = false;
                        break;
                    }
                }
            }
        }
        await this.asyncSetState({});
    }

    managePot = async (i, j) => {
        const newSquare = this.state.squares[i].row[j];
        if(newSquare.tile.pot){
            newSquare.tile.pot.position = {i, j};
            this.state.pots = [ ...this.state.pots, newSquare.tile.pot];
        }
        await this.asyncSetState({});
    }

    manageBoardElements = async (i, j) => {
        await this.manageBoardElement(i, j, this.state.paths, "pathSegments");
        await this.manageBoardElement(i, j, this.state.cities, "citySegments");
        await this.manageBoardElement(i, j, this.state.fields, "fieldSegments");
        await this.managePot(i, j);
    }

    checkPlayerHasTokens = () => {
        return this.state.currentPlayer && this.state.currentPlayer.tokens > 0;
    }

    checkCanPlaceTokenInElementType = (segments) => {
        if(segments){
            for(const segment of segments){
                if(segment.container.players && segment.container.players.length === 0){
                    return true;
                }
            }
        }
        return false;
    }

    checkCanPlaceTokenInPot = (pot) => {
        return pot && !pot.player;
    }

    checkCanPlaceToken = (tile) => {
        return (
            this.checkPlayerHasTokens() &&
            (
                this.checkCanPlaceTokenInElementType(tile.pathSegments) ||
                this.checkCanPlaceTokenInElementType(tile.citySegments) ||
                this.checkCanPlaceTokenInElementType(tile.fieldSegments) ||
                this.checkCanPlaceTokenInPot(tile.pot)
            )
        )
    }

    givePointsTo = async (segmentContainer, type, end) => {
        const tiles = [];
        segmentContainer.highlight = true;
        await this.asyncSetState({});
        //remove tokens
        for(const segment of segmentContainer.segments){
            if(segment.token){
                segment.returnToken();
                await this.asyncSetState({});
                await wait(Token.TIMEOUT);
            }
        }
        //show received points
        for(const segment of segmentContainer.segments){
            if(!tiles.includes(segment.tile)){
                let amount = 1;
                if(type === 'city'){
                    if(segment.postIt){
                        amount++;
                    }
                    let multiplier = 2;
                    if(end) {
                        if(segmentContainer.triangles){
                            multiplier = 0;
                        }
                        else {
                            multiplier = 1;
                        }
                    }
                    else if(segmentContainer.triangles){
                        multiplier = 3;
                    }
                    amount *= multiplier;
                }
                if(type === 'path' && segmentContainer.protractor){
                    amount = end ? 0 : 2;
                }
                segment.tile.points = { amount, players: segmentContainer.players};
                tiles.push(segment.tile);
                for(const player of segmentContainer.players){
                    player.points += segment.tile.points.amount;
                }
                await this.asyncSetState({});
                await wait(this.pointsTimeout);
            }
        }
        //hide received points
        for(const tile of tiles){
            tile.points = null;
        }
        await this.asyncSetState({});
        await wait(this.pointsTimeout);
        //empty gameElement players to remove pattern from segments
        segmentContainer.players = [];
        await this.asyncSetState({});
    }

    getPotSurroundings = (pot) => {
        let i = pot.position.i;
        let j = pot.position.j;
        let surroundings = [];
        if(i > 0){
            if(j > 0) {
                surroundings.push(this.state.squares[i - 1].row[j - 1]);
            }
            surroundings.push(this.state.squares[i - 1].row[j]);
            if(j < this.state.squares[0].row.length -1){
                surroundings.push(this.state.squares[i - 1].row[j + 1])
            }

        }
        if(j < this.state.squares[0].row.length -1) {
            surroundings.push(this.state.squares[i].row[j + 1]);
        }
        if(i < this.state.squares.length - 1) {
            if(j < this.state.squares[0].row.length -1){
                surroundings.push(this.state.squares[i + 1].row[j + 1]);
            }
            surroundings.push(this.state.squares[i + 1].row[j]);
            if(j > 0) {
                surroundings.push(this.state.squares[i + 1].row[j - 1]);
            }
        }
        if(j > 0) {
            surroundings.push(this.state.squares[i].row[j - 1]);
        }
        return surroundings;
    }

    givePointsToPot = async (pot, surroundings) => {
        let tiles = [pot.tile];
        pot.highlight = true;
        await this.asyncSetState({});
        //show received points
        for(const square of surroundings) {
            if(square.state === Square.STATES.set){
                tiles.push(square.tile);
                square.tile.points = { amount: 1, players: [pot.player]};
                pot.player.points += 1;
                await this.asyncSetState({});
                await wait(this.pointsTimeout);
            }
        }
        pot.tile.points = { amount: 1, players: [pot.player]};
        pot.player.points += 1;
        await this.asyncSetState({});
        await wait(this.pointsTimeout);
        //hide received points
        for(const tile of tiles){
            tile.points = null;
        }
        await this.asyncSetState({});
        await wait(this.pointsTimeout);
        pot.returnToken();
        pot.highlight = false;
        await this.asyncSetState({});
        await wait(this.pointsTimeout);

    }

    givePointsToPots = async () => {
        const potsToRemove = [];
        //give points to the fully surrounded pots
        for(const pot of this.state.pots) {
            //check if the por is fully surrounded
            const surroundings = this.getPotSurroundings(pot);
            if(surroundings.filter((square) => square.state === Square.STATES.set ).length === 8){
                //check if the pot has a player and give points if so
                if(pot.player){
                    await this.givePointsToPot(pot, surroundings);
                }
                potsToRemove.push(pot);
            }
        }
        //remove fully surrounded pots from the game state
        this.state.pots = this.state.pots.filter( p => !potsToRemove.includes(p));
    }

    moveBoardScrolls = (top, left) => {
        if(top && this.boardRef.current.parentElement.scrollTop === 0) {
            this.boardRef.current.parentElement.scrollTop = this.tileMinWidth * Math.pow(2, this.props.zoom) + 1;
        }

        if(left && this.boardRef.current.parentElement.clientWidth - this.boardRef.current.scrollWidth <= - this.tileMinWidth * Math.pow(2, this.state.zoom)) {
            this.boardRef.current.parentElement.scrollLeft = this.boardRef.current.parentElement.scrollLeft + this.tileMinWidth * Math.pow(2, this.state.zoom) + 1;
        }
    }

    _markPossiblesAndSave = async (squares, newTile, testCount, discardCount, onlySquare) =>{
        if(!this.markPossibles(squares, newTile, onlySquare)){
            if(testCount < 4){
                newTile.rotate();
                await this._markPossiblesAndSave(squares, newTile, ++testCount, discardCount, onlySquare);
            }
            else if(this.state.tiles.length > discardCount){
                if(newTile.river) {
                    this.state.tiles.splice(this.state.tiles.indexOf(this.state.tiles.find((tile) => this.props.riverSides.includes(tile.type))) + 1, 0, newTile);
                }
                else {
                    this.state.tiles = [ newTile, ...this.state.tiles ];
                }
                await this._markPossiblesAndSave(squares, this.state.tiles.pop(), 1, ++discardCount, onlySquare);
            }
            else {
                await this.asyncSetState({ newTile: null, discard: [ ...this.state.tiles, newTile ] });
            }
        }
        else {
            await this.asyncSetState({ squares, newTile });
        }
    }

    markPossiblesAndSave = async (squares, newTile, onlySquare) => {
        await this._markPossiblesAndSave(squares, newTile, 1, 0, onlySquare);
    }

    showTurnMessage = async () => {
        await this.blockBoard(true);
        return new Promise((resolve) => {
            this.setState({ message: new Message(
                <TurnMessageComponent player={this.state.currentPlayer} />,
                this.state.currentPlayer.color.getLightest(),
                null,
                null,
                async () => {
                    await this.blockBoard(false);
                    resolve();
                },
                1000
            ) });
        });
    }

    showTextMessage = async (text) => {
        await this.blockBoard(true);
        return new Promise((resolve) => {
            this.setState({ message: new Message(
                <TextMessageComponent text={text} />,
                null,
                null,
                null,
                async () => {
                    await this.blockBoard(false);
                    resolve();
                },
                1000
            )});
        });
    }

    getNextPlayer = async () => {
        if(!this.state.newTile.auto){
            await this.asyncSetState({ currentPlayer: this.props.players[this.playerIndex] });
            this.playerIndex = (this.playerIndex + 1) % this.props.players.length;
            await this.showTurnMessage();
        }
        else {
            await this.showTextMessage(this.props.t("MESSAGES.automatic"));
            await this.asyncSetState({ currentPlayer: null });
            await this.select(...this.state.onlySquare);
        }
    }

    showTextMessageWithButton = async (text, buttonText) => {
        await this.blockBoard(true);
        return new Promise((resolve) => {
            this.setState({ message: new Message(
                <TextMessageComponent text={text} />,
                null,
                buttonText,
                null,
                async () => {
                    await this.blockBoard(false);
                    resolve();
                }
            )});
        });
    }

    givePointsToField = async (field) => {
        const cities = [];
        const pointTiles = [];
        field.highlight = true;
        await this.asyncSetState({});
        //remove tokens
        for(const segment of field.segments){
            if(segment.token){
                segment.returnToken();
                await this.asyncSetState({});
                await wait(Token.TIMEOUT);
            }
        }
        //show received points
        for(const fieldSegment of field.segments){
            if(fieldSegment.citySegments){
                for(const citySegment of fieldSegment.citySegments){
                    if(!cities.includes(citySegment.container) && citySegment.container.closed){
                        if(fieldSegment.tile.points){
                            const previousPoints = fieldSegment.tile.points;
                            fieldSegment.tile.points = null;
                            await this.asyncSetState({});
                            await wait(this.pointsTimeout);
                            fieldSegment.tile.points = { amount: previousPoints.amount + 3, players: field.players };
                        }
                        else {
                            fieldSegment.tile.points = { amount: 3, players: field.players };
                        }
                        cities.push(citySegment.container);
                        pointTiles.push(fieldSegment.tile);
                        for(const player of field.players){
                            player.points += 3;
                        }
                        citySegment.container.highlightBorder = true;
                        await this.asyncSetState({});
                        await wait(this.pointsTimeout);
                        citySegment.container.highlightBorder = false;
                    }
                }
            }
        }
        //hide received points
        for(let tile of pointTiles){
            tile.points = null;
        }
        await this.asyncSetState({});
        await wait(this.pointsTimeout);
        //empty gameElement players to remove pattern from segments
        field.players = [];
        await this.asyncSetState({});
    }

    showWinnerMessage = async () => {
        await this.blockBoard(true)
        return this.asyncSetState({ message: new Message(
            <WinnerMessageComponent players={this.props.players} stats={this.stats} />,
            null,
            null,
            true
        )})
    }

    finishGame = async () => {
        //remove possible squares
        for(const squareRow of this.state.squares){
            for(const square of squareRow.row){
                if(square.state === Square.STATES.possible){
                    square.state = Square.STATES.empty;
                }
            }
        }

        //clear the side menu
        await this.asyncSetState({ newTile: null, currentPlayer: null });
        
        //show finish message
        await this.showTextMessageWithButton(this.props.t("MESSAGES.finish"), `${this.props.t("MESSAGES.finalPoints")} »`);

        //give final path points
        await this.showTextMessage(this.props.t("MESSAGES.pathPoints"));
        let placedTokens = false;
        for(const path of this.state.paths){
            if(path.players.length > 0){
                placedTokens = true;
                await this.givePointsTo(path, "path", true);
            }
        }
        if(!placedTokens) {
            await this.showTextMessage(this.props.t("MESSAGES.noPaths"));
        }

        //give final city points
        await this.showTextMessage(this.props.t("MESSAGES.cityPoints"));
        placedTokens = false;
        for(const city of this.state.cities){
            if(city.players.length > 0){
                placedTokens = true;
                await this.givePointsTo(city, "city", true);
            }
        }
        if(!placedTokens) {
            await this.showTextMessage(this.props.t("MESSAGES.noCities"));
        }
        
        //give final pot points
        await this.showTextMessage(this.props.t("MESSAGES.potPoints"));
        placedTokens = false;
        for(const pot of this.state.pots){
            if(pot.player){
                placedTokens = true;
                await this.givePointsToPot(pot, this.getPotSurroundings(pot));
            }
        }
        if(!placedTokens) {
            await this.showTextMessage(this.props.t("MESSAGES.noPots"));
        }
        
        //give final field points
        await this.showTextMessage(this.props.t("MESSAGES.fieldPoints"));
        placedTokens = false;
        for(const field of this.state.fields){
            if(field.players.length > 0){
                placedTokens = true;
                await this.givePointsToField(field);
            }
        }
        if(!placedTokens) {
            await this.showTextMessage(this.props.t("MESSAGES.noFields"));
        }
        this.stats.setPoints();

        await this.showTextMessage(this.props.t("MESSAGES.winnerIs"));
        await this.showWinnerMessage();

    }

    nextMove = async (i, j) => {
        const newTile = this.state.tiles.pop();
        if(newTile){
            let addLeft = false;
            let addTop = false;
            if(i === 0) {
                addTop = true;
                this.state.squares = [
                    new SquareRow(
                        this.state.squares[0].row.map((square) => {
                            return new Square(square.state === Square.STATES.set ? Square.STATES.possible : Square.STATES.empty);
                        })
                    ),
                    ...this.state.squares
                ];
                i++;
            }
            if(j === 0) {
                addLeft = true;
                this.state.squares = this.state.squares.map((squareRow) => {
                    squareRow.row = [ new Square(squareRow.row[0].state === Square.STATES.set ? Square.STATES.possible : Square.STATES.empty), ...squareRow.row ]
                    return squareRow;
                });
                j++;
            }
            if(i === this.state.squares.length - 1){
                this.state.squares = [
                    ...this.state.squares,
                    new SquareRow(
                        this.state.squares[this.state.squares.length - 1].row.map((square) => {
                            return new Square(square.state === Square.STATES.set ? Square.STATES.possible : Square.STATES.empty);
                        })
                    )
                ];
            }
            if(j === this.state.squares[0].row.length - 1) {
                this.state.squares = this.state.squares.map((squareRow) => {
                    squareRow.row = [ ...squareRow.row, new Square(squareRow.row[squareRow.row.length - 1].state === Square.STATES.set ? Square.STATES.possible : Square.STATES.empty) ];
                    return squareRow;
                });
            }
            this.state.squares[i - 1].row[j].state = this.state.squares[i - 1].row[j].state === Square.STATES.empty ? Square.STATES.possible : this.state.squares[i - 1].row[j].state;
            this.state.squares[i].row[j - 1].state = this.state.squares[i].row[j - 1].state === Square.STATES.empty ? Square.STATES.possible : this.state.squares[i].row[j - 1].state;
            this.state.squares[i + 1].row[j].state = this.state.squares[i + 1].row[j].state === Square.STATES.empty ? Square.STATES.possible : this.state.squares[i + 1].row[j].state;
            this.state.squares[i].row[j + 1].state = this.state.squares[i].row[j + 1].state === Square.STATES.empty ? Square.STATES.possible : this.state.squares[i].row[j + 1].state;

            //update pot positions
            for(const pot of this.state.pots){
                if(addTop) {
                    pot.position.i += 1;
                }
                if(addLeft){
                    pot.position.j += 1;
                }
            }

            this.moveBoardScrolls(addTop, addLeft);
            let onlySquare = null;
            if(newTile.river){
                let prevTile = this.state.squares[i].row[j].tile;
                for(let ii = 0; ii < 4; ii++){
                    if(prevTile.sides[ii] === 3){
                        let possibleOnlySquare = null;
                        switch(ii) {
                            case 0:
                                possibleOnlySquare = [i, j - 1];
                                break;
                            case 1:
                                possibleOnlySquare = [i - 1, j];
                                break;
                            case 2:
                                possibleOnlySquare = [i, j + 1];
                                break;
                            case 3:
                                possibleOnlySquare = [i + 1, j];
                                break;
                            default:
                                break;
                        }
                        if(this.state.squares[possibleOnlySquare[0]].row[possibleOnlySquare[1]].tile === null){
                            onlySquare = possibleOnlySquare;
                        }
                    }
                }
            }
            await this.asyncSetState({ prevRiverTileIndex: newTile.river ? [i, j] : null });
            await this.markPossiblesAndSave(this.state.squares, newTile, onlySquare);
            await this.asyncSetState({ onlySquare });
            await this.getNextPlayer();
        }
        else {
            await this.finishGame();
        }
    }

    givePoints = async (i, j) => {
        await this.asyncSetState({ highlightedSquare: null });
        const tile = this.state.squares[i].row[j].tile;
        if(tile.pathSegments){
            for(const pathSegment of tile.pathSegments){
                if(pathSegment.container.closed){
                    if(pathSegment.container.players.length > 0){
                        await this.givePointsTo(pathSegment.container, "path")
                    }
                    this.state.paths = this.state.paths.filter( p => p !== pathSegment.container );
                }
            }
        }
        if(tile.citySegments){
            for(const citySegment of tile.citySegments){
                if(citySegment.container.closed){
                    if(citySegment.container.players.length > 0){
                        await this.givePointsTo(citySegment.container, "city")
                    }
                    this.state.cities = this.state.cities.filter( c => c !== citySegment.container );
                }
            }
        }
        await this.givePointsToPots();
        this.stats.setPoints();
        await this.nextMove(i, j);
    }

    select = async (i, j) => {
        await this.blockBoard(true);
        this.state.squares[i].row[j].setTile(this.state.newTile);
        await this.manageBoardElements(i, j);
        let highlightedSquare = null;
        const canPlaceToken = this.checkCanPlaceToken(this.state.squares[i].row[j].tile);
        if(canPlaceToken) {
            highlightedSquare = [i, j];
        }
        await this.asyncSetState({ newTile: null, highlightedSquare });
        if(!canPlaceToken){
            await this.givePoints(i, j);
        }
        await this.blockBoard(false);
    }

    placeToken = async (segment, slotRef, rotation) => {
        const highlight = this.state.highlightedSquare;
        await this.asyncSetState({ highlightedSquare: null, blockBoard: true });
        const token = new Token(slotRef, rotation, this.state.currentPlayer);
        segment.putToken(token);
        await this.asyncSetState({});
        await wait(Token.TIMEOUT);
        await this.givePoints(...highlight);
        await this.blockBoard(false);
    }

    placeTokenInPot = async (pot) => {
        const highlight = this.state.highlightedSquare;
        await this.asyncSetState({ highlightedSquare: null, blockBoard: true });
        pot.putToken(this.state.currentPlayer);
        await this.asyncSetState({});
        await wait(Token.TIMEOUT);
        await this.givePoints(...highlight);
        await this.blockBoard(false);
    }

    componentDidMount = async () => {
        document.onkeydown = async (ev) => {
            switch(ev.key){
                case "ArrowLeft":
                    if(this.state.newTile){
                        this.unclock();
                        ev.preventDefault();
                    }
                    break;
                case "ArrowUp":
                    this.zoomIn();
                    ev.preventDefault();
                    break;
                case "ArrowRight":
                    if(this.state.newTile){
                        this.clock();
                        ev.preventDefault();
                    }
                    break;
                case "ArrowDown":
                    this.zoomOut();
                    ev.preventDefault();
                    break;
                case "Escape":
                    if(this.state.highlightedSquare){
                        await this.blockBoard(true);
                        await this.givePoints(...this.state.highlightedSquare);
                        await this.blockBoard(false);
                    }
                    break;
                default:
                    break
            }
        };
        document.onmouseleave = this.mouseUp;
        await this.showTextMessage(this.props.t('MESSAGES.start'));
        await this.getNextPlayer();
    };

    render() {
        return (
            <div
                className="game"
                style={{
                    "--tile-width": `${this.tileMinWidth}px`,
                    "--zoom": Math.pow(2, this.state.zoom),
                    "--token-timeout": `${Token.TIMEOUT}ms`,
                    "--points-timeout": `${this.pointsTimeout}ms`
                }}
            >
                <MessageComponent
                    message={this.state.message}
                />
                <div
                    className="board-container"
                    onMouseDown={() => {
                        this.isMouseDown = true
                        this.isMoving = false;
                    }}
                    onMouseMove={(ev) => {
                        if(this.isMouseDown){
                            this.isMoving = true;
                            this.boardRef.current.parentElement.scrollTop -= ev.movementY;
                            this.boardRef.current.parentElement.scrollLeft -= ev.movementX;
                        }
                    }}
                    onClickCapture={this.mouseUp}
                    onWheel={(e) => {
                        if(e.deltaY > 0){
                            this.zoomOut();
                        }
                        else {
                            this.zoomIn();
                        }
                    }}
                >
                    <Board
                        newTile={this.state.newTile}
                        highlightedSquare={this.state.highlightedSquare}
                        onlySquare={this.state.onlySquare}
                        blocked={this.state.blockBoard}
                        boardRef={this.boardRef}
                        squares={this.state.squares}
                        select={this.select}
                        nextAction={ async (i, j) => {
                            await this.blockBoard(true);
                            await this.givePoints(i, j);
                            await this.blockBoard(false);
                        }}
                        placeToken={this.placeToken}
                        placeTokenInPot={this.placeTokenInPot}
                        zoom={this.state.zoom}
                    />
                </div>
                <SideMenu
                    players={this.props.players}
                    zoomIn={this.zoomIn}
                    zoomOut={this.zoomOut}
                    zoom={this.state.zoom}
                    maxZoom={this.maxZoom}
                    tile={this.state.newTile}
                    remainingTilesNumber={this.state.tiles.length}
                    clock={this.clock}
                    unclock={this.unclock}
                    currentPlayer={this.state.currentPlayer}
                    showHowToPlay={this.props.showHowToPlay}
                />
            </div>
        )

    }
}

export default withTranslation()(Game);