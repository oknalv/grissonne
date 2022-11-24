import { Component } from "react";
import FullField from "../pieces/field/FullField";
import PotComponent from "../pieces/PotComponent";

class B extends Component {

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
            <PotComponent
                mainRotation={this.props.tile.rotation}
                id={`t${this.props.tile.id}p1`}
                selectable={this.props.selectablePieces}
                pot={this.props.tile.pot}
                placeTokenInPot={this.props.placeTokenInPot}
            />
            </>
        )
    }

}

export default B;