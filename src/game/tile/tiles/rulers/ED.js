import { Component } from "react";
import HalfField from "../pieces/field/HalfField";
import SidePath from "../pieces/path/SidePath";
import PotComponent from "../pieces/PotComponent";

class ED extends Component {

    render() {
        return (
            <>
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={3}
            />
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
                tokenX={-.6}
                tokenY={1.1}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[1]}
                rotation={3}
            />
            <PotComponent
                mainRotation={this.props.tile.rotation}
                id={`t${this.props.tile.id}p4`}
                selectable={this.props.selectablePieces}
                pot={this.props.tile.pot}
                placeTokenInPot={this.props.placeTokenInPot}
            />
            </>
        )
    }

}

export default ED;