import { Component } from "react";
import FullField from "../pieces/field/FullField";
import RiverEnd from "../pieces/river/RiverEnd";

class BB6F12 extends Component {

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
            <RiverEnd />
            </>
        )
    }

}

export default BB6F12;