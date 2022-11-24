import { Component } from "react";
import HalfField from "../pieces/field/HalfField";
import LongRiver from "../pieces/river/LongRiver";

class BB6F4 extends Component {

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
            />
            <LongRiver
                mainRotation={this.props.tile.rotation}
                rotation={1}
            />
            </>
        )
    }

}

export default BB6F4;