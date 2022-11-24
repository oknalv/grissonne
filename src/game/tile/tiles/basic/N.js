import FullField from "../pieces/field/FullField";
import HalfCity from "../pieces/city/HalfCity";
import { Component } from "react";

class N extends Component {

    render() {
        return (
            <>
            <FullField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
            />
            <HalfCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                rotation={1}
            />
            </>
        )
    }

}

export default N;