import { Component } from "react";
import ThreeQuartersCity from "../pieces/city/ThreeQuartersCity";
import HalfField from "../pieces/field/HalfField";

class R extends Component {

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
            <ThreeQuartersCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
            />
            </>
        )
    }

}

export default R;