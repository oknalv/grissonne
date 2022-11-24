import { Component } from 'react';
import TileComponent from '../../tile/TileComponent';
import Square from './Square';
import './SquareComponent.scss';

class SquareComponent extends Component {

    render() {
        const tile = this.props.square.state === Square.STATES.possible ? this.props.newTile : this.props.square.tile;
        return(
            <div className={`square ${this.props.square.state}${this.props.square.state === Square.STATES.possible && this.props.square.rightPlace ? " right-place" : ""}${this.props.isOnlySquare ? " only-square" : ""}`}>
            {
                tile &&
                <TileComponent
                    tile={tile}
                    selectablePieces={this.props.selectablePieces}
                    placeToken={this.props.placeToken}
                    placeTokenInPot={this.props.placeTokenInPot}
                    zoom={this.props.zoom}
                />
            }
            </div>
        );
    }
}

export default SquareComponent;