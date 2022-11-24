import { Component } from "react";
import PeakCity from "../pieces/city/PeakCity";
import CurvedHalfField from "../pieces/field/CurvedHalfField";
import FullField from "../pieces/field/FullField";

class EG extends Component {

    render() {
        return (
            <>
            <FullField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                tokenX={1}
                tokenY={1}
            />
            <CurvedHalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={1}
            />
            <PeakCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                rotation={2}
            />
            </>
        )
    }

}

export default EG;