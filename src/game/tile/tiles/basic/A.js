import FullField from "../pieces/field/FullField";
import PotComponent from "../pieces/PotComponent";
import SidePath from "../pieces/path/SidePath";
import { Component } from "react";

class A extends Component {

    render() {
        return (
            <>
            <FullField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                tokenX={1}
                tokenY={1}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                segment={this.props.tile.pathSegments[0]}
                mainRotation={this.props.tile.rotation}
            />
            <PotComponent
                mainRotation={this.props.tile.rotation}
                id={`t${this.props.tile.id}p2`}
                selectable={this.props.selectablePieces}
                pot={this.props.tile.pot}
                placeTokenInPot={this.props.placeTokenInPot}
            />
            </>
        )
    }

}

export default A;