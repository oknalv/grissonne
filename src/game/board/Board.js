import { Component } from "react";
import Square from "./square/Square";
import SquareComponent from "./square/SquareComponent";
import './Board.scss';
import { withTranslation } from "react-i18next";

class Board extends Component {

    render() {
        const isBoardHighlighting = this.props.highlightedSquare != null;
        return (
            <div
                className={`board${isBoardHighlighting ? " square-highlight": ""}${this.props.blocked ? " blocked" : ""}${this.props.onlySquare ? " only-square" : ""}`}
                ref={this.props.boardRef}
            >
                {
                    this.props.squares.map((squareRow, i) => {
                        return (
                            <div className="square-row" key={`r${squareRow.key}`}>
                                {
                                    squareRow.row.map((square, j) => {
                                        const highlight = isBoardHighlighting && this.props.highlightedSquare[0] === i && this.props.highlightedSquare[1] === j;
                                        return (
                                            <div className={`square-cell${highlight ? " highlight" : ""}`} key={`c${square.key}`}>
                                                <div onClickCapture={(event) => {
                                                    if(!this.props.blocked && !isBoardHighlighting && square.state === Square.STATES.possible && square.rightPlace){
                                                        event.stopPropagation();
                                                        this.props.select(i, j);
                                                    }
                                                }}>
                                                    <SquareComponent
                                                        square={square}
                                                        newTile={this.props.newTile}
                                                        isOnlySquare={this.props.onlySquare && this.props.onlySquare[0] === i && this.props.onlySquare[1] === j}
                                                        selectablePieces={highlight}
                                                        placeToken={this.props.placeToken}
                                                        placeTokenInPot={this.props.placeTokenInPot}
                                                        zoom={this.props.zoom}
                                                    />
                                                </div>
                                                {
                                                    highlight &&
                                                    <button className="skip-button" onClick={() =>{
                                                        this.props.nextAction(i, j);
                                                    }}>{this.props.t("BOARD.skip").toUpperCase()}</button>
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        )
    }

}

export default withTranslation()(Board);